import {JobCell} from '~job-offers/components/job-cell';
import {JobOffer} from '~job-offers/types/job-offer';

import * as S from './job-cell-grid.styles';

interface Props {
  jobOffers: JobOffer[];
}

export const JobCellGrid: React.FC<Props> = ({jobOffers}) => (
  <S.Grid>
    {jobOffers.map(jobOffer => (
      <JobCell key={jobOffer.id} jobOffer={jobOffer} />
    ))}
  </S.Grid>
);
