import * as S from './job-location.styles';

interface Props {
  children: string;
}

export const JobLocation: React.FC<Props> = ({children}) => <S.Location>{children}</S.Location>;
