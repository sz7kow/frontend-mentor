import {GetStaticPaths, GetStaticProps} from 'next';
import {Fragment} from 'react';

import {Constrained} from 'common/components/constrained';
import {EmployerCard} from 'job-offers/components/employer-card';
import {JobDetailsCard} from 'job-offers/components/job-details-card';
import {PageFooterApplyNow} from 'job-offers/components/page-footer-apply-now';
import {PageHeader} from 'job-offers/components/page-header';
import {JOB_OFFERS_SOURCE} from 'job-offers/constants/job-offers-source';
import {JobOffer} from 'job-offers/types/job-offer';

import * as S from 'styles/pages/[id].styles';

interface StaticProps {
  jobOffer: JobOffer;
}

interface Props extends StaticProps {}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: JOB_OFFERS_SOURCE.map(({id}) => ({params: {id}})),
  fallback: false,
});

export const getStaticProps: GetStaticProps<StaticProps, {id: string}> = context => ({
  props: {
    jobOffer: JOB_OFFERS_SOURCE.filter(jobOffers => jobOffers.id === context.params?.id)[0],
  },
});

const JobOfferPage: React.FC<Props> = ({jobOffer: {employer, details, metadata}}) => (
  <Fragment>
    <PageHeader />
    <S.PageOuterContainer>
      <Constrained as="main" size="medium">
        <S.PageInnerContainer>
          <EmployerCard employer={employer} />
          <JobDetailsCard createdAt={metadata.createdAt} details={details} />
        </S.PageInnerContainer>
      </Constrained>
      <PageFooterApplyNow applyUrl={details.applyUrl} company={employer.company} position={details.position} />
    </S.PageOuterContainer>
  </Fragment>
);

// eslint-disable-next-line import/no-default-export
export default JobOfferPage;
