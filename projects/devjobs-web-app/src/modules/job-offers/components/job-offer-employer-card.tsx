import React from 'react';
import styled from 'styled-components';

import {Button} from 'common/components/button';
import {slugify} from 'common/utils/slugify';
import Link from 'next/link';
import {JobOfferEmployer} from '~job-offers/types/job-offer-employer';

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: 0.375rem;
  background-color: ${({theme}) => theme.palette.background.secondary};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    flex-direction: row;
    height: 8.75rem;
    overflow: hidden;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 0.9375rem;
  transform: translate(-50%, -50%);

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    position: static;
    width: 8.75rem;
    height: 8.75rem;
    border-radius: 0;
    transform: none;
  }
`;

const Logo = styled.img`
  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    transform: scale(2);
  }
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  row-gap: 1.6875rem;
  padding: 3.0625rem 1.5rem 2rem;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 2.625rem 2.5rem 2.8125rem 2.5rem;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding-right: 2.6875rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 0.8125rem;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

const Company = styled.h2`
  font-size: ${({theme}) => theme.typography.h3.fontSize};
  line-height: 100%;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    font-size: ${({theme}) => theme.typography.h2.fontSize};
  }
`;

const Website = styled.p`
  line-height: ${({theme}) => theme.typography.body.fontSize};
`;

/* -------------------------------------------------------------------------- */
/*                           Job Offer Employer Card                          */
/* -------------------------------------------------------------------------- */
interface Props {
  employer: JobOfferEmployer;
}

export const JobOfferEmployerCard: React.FC<Props> = ({
  employer: {
    company,
    websiteUrl,
    logo: {source, backgroundColor},
  },
}) => (
  <Container>
    <LogoContainer style={{backgroundColor}}>
      <Logo alt={`${company}'s Logo`} src={source} />
    </LogoContainer>
    <Content>
      <Details>
        <Company>{company}</Company>
        <Website>{`${slugify(company)}.com`}</Website>
      </Details>
      <Link href={websiteUrl}>
        <Button spacing="small" variant="subtile">
          Company Site
        </Button>
      </Link>
    </Content>
  </Container>
);
