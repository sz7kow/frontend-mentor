import {useEffect, useState} from 'react';

export const useInnerWidth = (): number => {
  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return innerWidth;
};
