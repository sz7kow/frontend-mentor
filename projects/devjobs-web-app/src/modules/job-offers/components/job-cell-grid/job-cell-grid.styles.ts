import styled from 'styled-components';

import {createBreakpoint} from '~theming/utils/create-breakpoint';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 3.0625rem;
  ${createBreakpoint('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 4.0625rem;
    column-gap: 0.6875rem;
  }
  ${createBreakpoint('desktop')} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.875rem;
  }
`;
