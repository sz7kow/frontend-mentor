import {JobProperty} from 'job-offers/components/job-property';

import * as S from './job-metadata.styles';

interface Props {
  contract: string;
  createdAt: string;
}

export const JobMetadata: React.FC<Props> = ({contract, createdAt}) => (
  <S.Metadata>
    <JobProperty as="span">{createdAt}</JobProperty>
    <JobProperty as="span">{contract}</JobProperty>
  </S.Metadata>
);
