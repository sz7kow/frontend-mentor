import {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';

import {useInnerWidth} from 'common/hooks/use-inner-width';
import {toPixels} from 'common/utils/to-pixels';

export const useIsMobile = (): boolean => {
  const innerWidth = useInnerWidth();
  const {breakpoints} = useTheme();

  const [isMobile, setIsMobile] = useState<boolean>(innerWidth < toPixels(breakpoints.tablet));

  useEffect(() => {
    setIsMobile(innerWidth < toPixels(breakpoints.tablet));
  }, [innerWidth, breakpoints.tablet]);

  return isMobile;
};
