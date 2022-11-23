import Link from 'next/link';
import styled from 'styled-components';

import {Button} from 'common/components/button';
import {JobOfferDetails} from '~job-offers/types/job-offer-details';

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const Container = styled.div`
  padding: 2.5rem 1.5rem;
  border-radius: 0.375rem;
  background-color: ${({theme}) => theme.palette.background.secondary};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding: 3rem;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding-right: 2.6875rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.125rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 2.5rem;
  }
`;

const Details = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 0.4375rem;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    row-gap: 0.25rem;
  }
`;

const Metadata = styled.div`
  &,
  & > *:not(:last-child) {
    display: flex;
    flex-direction: row;
    column-gap: 0.75rem;
    align-items: center;
  }

  & > *:not(:last-child):after {
    content: '';
    position: static;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.palette.typography.default};
  }
`;

const Position = styled.h1`
  font-size: ${({theme}) => theme.typography.h3.fontSize};
  line-height: ${({theme}) => theme.typography.h3.lineHeight};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    font-size: ${({theme}) => theme.typography.h1.fontSize};
    line-height: ${({theme}) => theme.typography.h1.lineHeight};
  }
`;

const Location = styled.p`
  font-size: ${({theme}) => theme.typography.h4.fontSize};
  font-weight: 700;
  line-height: ${({theme}) => theme.typography.h4.lineHeight};
  color: ${({theme}) => theme.palette.success.primary};
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`;

const Section = styled.div`
  h2 {
    margin-bottom: 1.75rem;
    font-size: ${({theme}) => theme.typography.h3.fontSize};
    line-height: ${({theme}) => theme.typography.h3.lineHeight};
  }

  p {
    margin-bottom: 2rem;
  }

  ul,
  ol {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    li {
      display: flex;
      flex-direction: row;
    }
  }

  ul li {
    column-gap: 2rem;

    ::before {
      content: '';
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 0.125rem;
      background-color: ${({theme}) => theme.palette.success.primary};
      transform: translateY(0.6875rem);
    }
  }

  ol {
    counter-reset: ol-counter;

    li {
      column-gap: 1.75rem;

      ::before {
        counter-increment: ol-counter;
        content: counter(ol-counter);
        font-weight: 700;
        color: ${({theme}) => theme.palette.success.primary};
      }
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    & + & {
      margin-top: 0.5rem;
    }
  }
`;

/* -------------------------------------------------------------------------- */
/*                           Job Offer Details Card                           */
/* -------------------------------------------------------------------------- */
interface Props {
  createdAt: string;
  details: JobOfferDetails;
}

const JobOfferDetailsCard: React.FC<Props> = ({
  createdAt,
  details: {applyUrl, contract, description, location, position, requirements, role},
}) => (
  <Container>
    <Header>
      <Details>
        <Metadata>
          <span>{createdAt}</span>
          <span>{contract}</span>
        </Metadata>
        <Position>{position}</Position>
        <Location>{location}</Location>
      </Details>
      <Link href={applyUrl}>
        <Button>Apply Now</Button>
      </Link>
    </Header>
    <MainContent>
      <p>{description}</p>
      <Section>
        <h2>Requirements</h2>
        <p>{requirements.content}</p>
        <ul>
          {requirements.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2>What You Will Do</h2>
        <p>{role.content}</p>
        <ol>
          {role.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </Section>
    </MainContent>
  </Container>
);

export {JobOfferDetailsCard};
