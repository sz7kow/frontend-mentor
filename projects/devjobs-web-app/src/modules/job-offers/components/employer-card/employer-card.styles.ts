import styled from 'styled-components';

import {createBreakpoint} from 'themes/utils/create-breakpoint';
import {createTypographyStyles} from 'themes/utils/create-typography-styles';

export const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 0.375rem;
  background-color: ${({theme}) => theme.palette.background.secondary};
  ${createBreakpoint('tablet')} {
    flex-direction: row;
    overflow: hidden;
    height: 8.75rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  row-gap: 1.625rem;
  padding: 2.875rem 1.5rem 2rem;
  ${createBreakpoint('tablet')} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 2.625rem 2.5rem 2.8125rem 2.5rem;
  }
  ${createBreakpoint('desktop')} {
    padding-right: 2.6875rem;
  }
`;

export const LogoContainerMobile = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  ${createBreakpoint('tablet')} {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: none;
  ${createBreakpoint('tablet')} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.75rem;
    height: 8.75rem;
  }
`;

export const Logo = styled.img`
  transform: scale(2);
`;

export const EmployerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 0.5625rem;
  ${createBreakpoint('tablet')} {
    align-items: flex-start;
  }
`;

export const EmployerCompany = styled.h2`
  ${createTypographyStyles('h3')}
  ${createBreakpoint('tablet')} {
    ${createTypographyStyles('h2')}
  }
`;
