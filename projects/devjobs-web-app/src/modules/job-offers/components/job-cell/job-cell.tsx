import React from 'react';

import {EmployerLogo} from '~job-offers/components/employer-logo';
import {JobLocation} from '~job-offers/components/job-location';
import {JobMetadata} from '~job-offers/components/job-metadata';
import {JobOffer} from '~job-offers/types/job-offer';

import * as S from './job-cell.styles';

interface Props {
  jobOffer: JobOffer;
}

export const JobCell: React.FC<Props> = ({
  jobOffer: {
    details: {contract, location, position},
    employer: {
      company,
      logo: {backgroundColor, source},
    },
    id,
    metadata: {createdAt},
  },
}) => (
  <S.Cell>
    <S.EmployerLogoContainer>
      <EmployerLogo backgroundColor={backgroundColor} company={company} src={source} />
    </S.EmployerLogoContainer>
    <S.CellInnerContainer>
      <div>
        <JobMetadata contract={contract} createdAt={createdAt} />
        <S.JobPositionLink href={`/job-offers/${id}`}>{position}</S.JobPositionLink>
        <S.EmployerCompany>{company}</S.EmployerCompany>
      </div>
      <JobLocation>{location}</JobLocation>
    </S.CellInnerContainer>
  </S.Cell>
);
