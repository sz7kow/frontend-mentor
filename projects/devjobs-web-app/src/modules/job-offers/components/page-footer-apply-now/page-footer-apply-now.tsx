import Link from 'next/link';

import {Button} from 'common/components/button';
import {Constrained} from 'common/components/constrained';
import {JobProperty} from 'job-offers/components/job-property';

import * as S from './page-footer-apply-now.styles';

interface Props {
  applyUrl: string;
  company: string;
  position: string;
}

export const PageFooterApplyNow: React.FC<Props> = ({applyUrl, company, position}) => (
  <S.Footer>
    <Constrained size="medium">
      <S.FooterInnerContainer>
        <S.JobDetails>
          <h3>{position}</h3>
          <JobProperty as="p">{company}</JobProperty>
        </S.JobDetails>
        <Link href={applyUrl}>
          <Button>Apply Now</Button>
        </Link>
      </S.FooterInnerContainer>
    </Constrained>
  </S.Footer>
);
