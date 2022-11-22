import {GetStaticPaths, GetStaticProps} from 'next';
import {Fragment} from 'react';
import styled from 'styled-components';

import {Constrained} from 'common/components/constrained';
import {JobOfferDetailsCard} from '~job-offers/components/job-offer-details-card';
import {JobOfferEmployerCard} from '~job-offers/components/job-offer-employer-card';
import {JobOfferPageFooter} from '~job-offers/components/job-offer-page-footer';
import {JobOfferPageHeader} from '~job-offers/components/job-offer-page-header';
import {JOB_OFFERS_SOURCE} from '~job-offers/constants/job-offers-source';
import {JobOffer} from '~job-offers/types/job-offer';

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    row-gap: 3.3125rem;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    row-gap: 5rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.4375rem;
  padding-top: 1.5625rem;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    row-gap: 2rem;
    padding-top: 0;
  }
`;

/* -------------------------------------------------------------------------- */
/*                               Job Offer Page                               */
/* -------------------------------------------------------------------------- */
interface StaticProps {
  jobOffer: JobOffer;
}

interface Props extends StaticProps {}

const JobOfferPage: React.FC<Props> = ({jobOffer: {employer, details, metadata}}) => (
  <Fragment>
    <JobOfferPageHeader />
    <OuterContainer>
      <Constrained as="main" size="medium">
        <InnerContainer>
          <JobOfferEmployerCard employer={employer} />
          <JobOfferDetailsCard createdAt={metadata.createdAt} details={details} />
        </InnerContainer>
      </Constrained>
      <JobOfferPageFooter applyUrl={details.applyUrl} company={employer.company} position={details.position} />
    </OuterContainer>
  </Fragment>
);

// eslint-disable-next-line import/no-default-export
export default JobOfferPage;

/* -------------------------------------------------------------------------- */
/*                                     SSR                                    */
/* -------------------------------------------------------------------------- */
export const getStaticPaths: GetStaticPaths = () => ({
  paths: JOB_OFFERS_SOURCE.map(({id}) => ({params: {id}})),
  fallback: false,
});

export const getStaticProps: GetStaticProps<StaticProps, {id: string}> = context => ({
  props: {
    jobOffer: JOB_OFFERS_SOURCE.filter(jobOffers => jobOffers.id === context.params?.id)[0],
  },
});
