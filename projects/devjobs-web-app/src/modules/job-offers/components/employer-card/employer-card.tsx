import Link from 'next/link';

import {Button} from 'common/components/button';
import {createSlug} from 'common/utils/create-slug';
import {EmployerLogo} from 'job-offers/components/employer-logo';
import {JobProperty} from 'job-offers/components/job-property';
import {JobOfferEmployer} from 'job-offers/types/job-offer';

import * as S from './employer-card.styles';

interface Props {
  employer: JobOfferEmployer;
}

export const EmployerCard: React.FC<Props> = ({
  employer: {
    company,
    websiteUrl,
    logo: {source, backgroundColor},
  },
}) => (
  <S.Card>
    <S.LogoContainerMobile>
      <EmployerLogo backgroundColor={backgroundColor} company={company} src={source} />
    </S.LogoContainerMobile>
    <S.LogoContainer style={{backgroundColor}}>
      <S.Logo alt={`${company}'s Logo`} src={source} />
    </S.LogoContainer>
    <S.CardContent>
      <S.EmployerDetails>
        <S.EmployerCompany>{company}</S.EmployerCompany>
        <JobProperty>{`${createSlug(company)}.com`}</JobProperty>
      </S.EmployerDetails>
      <Link href={websiteUrl}>
        <Button spacing="small" variant="contrast">
          Company Site
        </Button>
      </Link>
    </S.CardContent>
  </S.Card>
);
