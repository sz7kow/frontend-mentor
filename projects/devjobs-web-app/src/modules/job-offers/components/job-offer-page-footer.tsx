import Link from 'next/link';
import styled from 'styled-components';

import {Button} from 'common/components/button';
import {Constrained} from 'common/components/constrained';

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const Footer = styled.footer`
  padding: 1.5rem 0;
  background-color: ${({theme}) => theme.palette.background.secondary};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding: 1.4375rem 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Details = styled.div`
  display: none;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

/* -------------------------------------------------------------------------- */
/*                            Job Offer Page Footer                           */
/* -------------------------------------------------------------------------- */
interface Props {
  applyUrl: string;
  company: string;
  position: string;
}

export const JobOfferPageFooter: React.FC<Props> = ({applyUrl, company, position}) => (
  <Footer>
    <Constrained size="medium">
      <InnerContainer>
        <Details>
          <h3>{position}</h3>
          <p>{company}</p>
        </Details>
        <Link href={applyUrl}>
          <Button>Apply Now</Button>
        </Link>
      </InnerContainer>
    </Constrained>
  </Footer>
);
