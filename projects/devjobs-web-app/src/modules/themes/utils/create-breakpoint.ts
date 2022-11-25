import {Theme} from 'themes/types/theme';

export const createBreakpoint =
  (breakpointKey: keyof Theme['breakpoints']) =>
  ({theme}: {theme: Theme}) =>
    `@media screen and (min-width: ${theme.breakpoints[breakpointKey]})`;
