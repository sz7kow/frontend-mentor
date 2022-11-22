import {Button} from 'common/components/button';
import styled from 'styled-components';

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
  row-gap: 7px;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    row-gap: 4px;
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
    margin-bottom: 28px;
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
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: ${({theme}) => theme.palette.success.primary};
      transform: translateY(11px);
    }
  }

  ol {
    counter-reset: ol-counter;

    li {
      column-gap: 28px;

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

const JobOfferDetailsCard: React.FC<Props> = ({createdAt, details}) => (
  <Container>
    <Header>
      <Details>
        <Metadata>
          <span>{createdAt}</span>
          <span>{details.contract}</span>
        </Metadata>
        <Position>{details.position}</Position>
        <Location>{details.location}</Location>
      </Details>
      <Button>Apply Now</Button>
    </Header>
    <MainContent>
      <p>{details.description}</p>
      <Section>
        <h2>Requirements</h2>
        <p>{details.requirements.content}</p>
        <ul>
          {details.requirements.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2>What You Will Do</h2>
        <p>{details.role.content}</p>
        <ol>
          {details.role.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </Section>
    </MainContent>
  </Container>
);

export {JobOfferDetailsCard};
