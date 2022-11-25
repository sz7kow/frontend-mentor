import styled from 'styled-components';

import {createBreakpoint} from 'themes/utils/create-breakpoint';

export const Container = styled.div`
  max-width: 46.0625rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  ${createBreakpoint('tablet')} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  &[data-size='medium'] {
    ${createBreakpoint('tablet')} {
      max-width: 50.625rem;
    }
  }
  &[data-size='large'] {
    ${createBreakpoint('tablet')} {
      max-width: 74.375rem;
    }
  }
`;
