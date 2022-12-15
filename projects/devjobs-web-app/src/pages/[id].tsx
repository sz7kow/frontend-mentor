import {Company, JobOffer} from '@prisma/client';
import {GetServerSideProps, NextPage} from 'next';
import Head from 'next/head';
import {Fragment} from 'react';

import {getSsgHelpers} from '~/app/get-ssg-helpers';
import {Container} from '~/common/container';
import {CompanyCard} from '~/company/company-card';
import {JobOfferCard} from '~/job-offer/job-offer-card';
import {PageFooter} from '~/job-offer/page-footer';

interface ServerSideProps {
  jobOffer: JobOffer & {company: Company};
}

type QueryParams = {
  id: string;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps, QueryParams> = async (context) => {
  const id = context.params?.id as string;

  const ssgHelpers = await getSsgHelpers();
  const jobOffer = await ssgHelpers.jobOffer.getOne.fetch({id});

  if (!jobOffer) return {redirect: {destination: '/404', permanent: false}};

  return {props: {jobOffer}};
};

const JobOfferPage: NextPage<ServerSideProps> = ({jobOffer}) => (
  <Fragment>
    <Head>
      <title>{`${jobOffer.position} | DevJobs Web App`}</title>
      <meta key="description" content={jobOffer.description} property="og:description" />
    </Head>
    <div className="flex h-full flex-col gap-y-16 tablet:gap-y-13.25 desktop:gap-y-20">
      <main className="grow">
        <Container className="flex flex-col gap-y-5.75 pt-6.25 tablet:gap-y-8 tablet:pt-0" size="medium">
          <CompanyCard {...jobOffer.company} />
          <JobOfferCard {...jobOffer} />
        </Container>
      </main>
      <PageFooter applyUrl={jobOffer.applyUrl} companyName={jobOffer.company.name} position={jobOffer.position} />
    </div>
  </Fragment>
);

// eslint-disable-next-line import/no-default-export
export default JobOfferPage;
