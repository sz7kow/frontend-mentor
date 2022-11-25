import styled from 'styled-components';

import {createBreakpoint} from 'themes/utils/create-breakpoint';

export const PageOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  ${createBreakpoint('tablet')} {
    row-gap: 3.3125rem;
  }
  ${createBreakpoint('desktop')} {
    row-gap: 5rem;
  }
`;

export const PageInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.4375rem;
  padding-top: 1.5625rem;
  ${createBreakpoint('tablet')} {
    row-gap: 2rem;
    padding-top: 0;
  }
`;
