import * as S from './employer-logo.styles';

interface Props {
  backgroundColor: string;
  company: string;
  src: string;
}

export const EmployerLogo: React.FC<Props> = ({backgroundColor, company, src}) => (
  <S.Container style={{backgroundColor}}>
    <S.Logo alt={`${company}'s Logo`} src={src} />
  </S.Container>
);
