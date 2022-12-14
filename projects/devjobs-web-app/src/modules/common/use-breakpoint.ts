import {useEffect, useState} from 'react';

import {useInnerWidth} from './use-inner-width';

const TABLET_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1440;

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

const getBreakpoint = (width: number): Breakpoint => {
  let breakpoint: Breakpoint = 'mobile';

  if (width >= TABLET_BREAKPOINT) breakpoint = 'tablet';
  if (width >= DESKTOP_BREAKPOINT) breakpoint = 'desktop';

  return breakpoint;
};

export const useBreakpoint = (): Breakpoint => {
  const innerWidth = useInnerWidth();

  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint(innerWidth));

  useEffect(() => {
    setBreakpoint(getBreakpoint(innerWidth));
  }, [innerWidth]);

  return breakpoint;
};
