import styled from 'styled-components';

import {createBreakpoint} from 'themes/utils/create-breakpoint';
import {createTypographyStyles} from 'themes/utils/create-typography-styles';

export const Card = styled.div`
  border-radius: 0.375rem;
  padding: 2.375rem 1.5rem 2.5rem;
  background-color: ${({theme}) => theme.palette.background.secondary};
  ${createBreakpoint('tablet')} {
    padding: 2.875rem 3rem 3.0625rem;
  }
  ${createBreakpoint('desktop')} {
    padding-right: 2.6875rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.375rem;
  margin-bottom: 1.875rem;
  ${createBreakpoint('tablet')} {
    flex-direction: row;
    align-items: center;
    margin-bottom: 2.625rem;
  }
`;

export const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4375rem;
  flex-grow: 1;
  ${createBreakpoint('tablet')} {
    row-gap: 0.25rem;
  }
`;

export const JobPosition = styled.h1`
  ${createTypographyStyles('h3')}
  ${createBreakpoint('tablet')} {
    ${createTypographyStyles('h1')}
    margin-bottom: 0.25rem;
  }
`;

export const JobLocation = styled.p`
  ${createTypographyStyles('h4')}
  color: ${({theme}) => theme.palette.success.primary};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.375rem;
`;

export const CardText = styled.p`
  color: ${({theme}) => theme.palette.typography.defaultAlt};
`;

export const Section = styled.div`
  color: ${({theme}) => theme.palette.typography.defaultAlt};
  ${createBreakpoint('desktop')} {
    & + & {
      margin-top: 0.5rem;
    }
  }
`;

export const SectionTitle = styled.h2`
  ${createTypographyStyles('h3')}
  margin-bottom: 1.5625rem;
  ${createBreakpoint('tablet')} {
    margin-bottom: 1.625rem;
  }
`;

export const SectionText = styled.p`
  margin-bottom: 2rem;
  ${createBreakpoint('tablet')} {
    margin-bottom: 1.5rem;
  }
`;

export const SectionLi = styled.li`
  display: flex;
  flex-direction: row;
  ::before {
    content: '';
  }
`;

export const SectionUl = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  & > ${SectionLi} {
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
`;

export const SectionOl = styled.ol`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  counter-reset: ol-counter;
  & > ${SectionLi} {
    column-gap: 1.75rem;
    ::before {
      counter-increment: ol-counter;
      content: counter(ol-counter);
      font-weight: 700;
      color: ${({theme}) => theme.palette.success.primary};
    }
  }
`;
