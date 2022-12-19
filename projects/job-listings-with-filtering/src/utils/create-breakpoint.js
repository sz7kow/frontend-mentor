export const createBreakpoint =
  (breakpoint) =>
  ({theme}) =>
    `@media (min-width: ${theme.breakpoints[breakpoint]})`;
