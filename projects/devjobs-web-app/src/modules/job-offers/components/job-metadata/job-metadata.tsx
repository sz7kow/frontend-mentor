import * as S from './job-metadata.styles';

interface Props {
  contract: string;
  createdAt: string;
}

export const JobMetadata: React.FC<Props> = ({contract, createdAt}) => (
  <S.Metadata>
    <span>{createdAt}</span>
    <S.Contract>{contract}</S.Contract>
  </S.Metadata>
);
