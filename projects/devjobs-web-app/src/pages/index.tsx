import {Company, JobOffer} from '@prisma/client';
import {GetServerSideProps, NextPage} from 'next';
import Head from 'next/head';
import {Fragment, useCallback, useState} from 'react';

import {getSsgHelpers} from '~/app/get-ssg-helpers';
import {useTrcp} from '~/app/trpc-next-instance';
import {Button} from '~/common/button';
import {Container} from '~/common/container';
import {JobOfferGrid} from '~/job-offer/job-offer-grid';
import {PageLayout} from '~/job-offer/page-layout';
import {SearchBar} from '~/job-offer/search-bar';
import {initialSearchValues, SearchValues} from '~/job-offer/search-form-config';

const LIMIT_PER_PAGE = 12;

interface ServerSideProps {
  jobOffers: (JobOffer & {company: Company})[];
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  const ssgHelpers = await getSsgHelpers();
  const jobOffers = await ssgHelpers.jobOffer.getMany.fetch({limit: LIMIT_PER_PAGE});

  return {
    props: {
      jobOffers,
    },
  };
};

const JobOffersPage: NextPage<ServerSideProps> = ({jobOffers: initialJobOffers}) => {
  const trpcUtils = useTrcp();

  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isLoadingWithNewOptions, setIsLoadingWithNewOptions] = useState(false);
  const [searchValues, setSearchValues] = useState<SearchValues>(initialSearchValues);
  const [jobOffers, setJobOffers] = useState(initialJobOffers);

  const handleSearchValuesChange = useCallback(
    (newSearchValues: SearchValues) => {
      if (JSON.stringify(searchValues) === JSON.stringify(newSearchValues)) return;

      const queryOptions = {
        isFullTime: newSearchValues.isFullTime,
        limit: LIMIT_PER_PAGE,
        location: newSearchValues.location,
        position: newSearchValues.position,
      };

      setSearchValues(newSearchValues);
      setIsLoadingWithNewOptions(true);
      trpcUtils.jobOffer.getMany.fetch(queryOptions).then((newJobOffers) => {
        setHasMore(newJobOffers.length === LIMIT_PER_PAGE);
        setJobOffers(newJobOffers);
        setIsLoadingWithNewOptions(false);
      });
    },
    [searchValues, trpcUtils.jobOffer.getMany]
  );

  const handleSearchMore = useCallback(() => {
    const queryOptions = {
      isFullTime: searchValues.isFullTime,
      limit: LIMIT_PER_PAGE,
      location: searchValues.location,
      position: searchValues.position,
      skip: jobOffers.length,
    };

    setIsLoadingMore(true);
    trpcUtils.jobOffer.getMany.fetch(queryOptions).then((newJobOffers) => {
      setHasMore(newJobOffers.length === LIMIT_PER_PAGE);
      setJobOffers((currentJobOffers) => [...currentJobOffers, ...newJobOffers]);
      setIsLoadingMore(false);
    });
  }, [jobOffers.length, searchValues, trpcUtils.jobOffer.getMany]);

  return (
    <Fragment>
      <Head>
        <title>Job Offers | DevJobs Web App</title>
        <meta
          key="description"
          content="This is a solution to the 'Devjobs web app' challenge."
          property="og:description"
        />
      </Head>
      <PageLayout>
        <main>
          <Container className="flex flex-col gap-y-14.25 tablet:gap-y-17.5 desktop:gap-y-26.25" size="large">
            <SearchBar isLoading={isLoadingWithNewOptions} onSubmit={handleSearchValuesChange} />
            <div>
              <JobOfferGrid jobOffers={jobOffers} />
              <div className="tablet:mb-15.26 mb-15.5 desktop:mb-26">
                {hasMore && (
                  <div className="mt-8 text-center tablet:mt-14">
                    <Button isLoading={isLoadingMore} onClick={handleSearchMore}>
                      Load More
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </main>
      </PageLayout>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default JobOffersPage;
