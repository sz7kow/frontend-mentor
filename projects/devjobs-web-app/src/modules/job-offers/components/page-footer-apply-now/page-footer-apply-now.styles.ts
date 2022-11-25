import styled from 'styled-components';

import {createBreakpoint} from 'themes/utils/create-breakpoint';

export const Footer = styled.footer`
  padding: 1.5rem 0;
  background-color: ${({theme}) => theme.palette.background.secondary};
  ${createBreakpoint('tablet')} {
    padding: 1.4375rem 0;
  }
`;

export const FooterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${createBreakpoint('tablet')} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const JobDetails = styled.div`
  display: none;
  ${createBreakpoint('tablet')} {
    display: flex;
    flex-direction: column;
  }
`;
