import {AnimatePresence, m} from 'framer-motion';
import {useRouter} from 'next/router';
import Script from 'next/script';
import {Fragment} from 'react';

interface Props {
  children?: React.ReactNode;
}

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 25,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.5,
  type: 'spring',
};

const scrollRestorationScript = `history.scrollRestoration = 'manual'`;

export const PageAnimationProvider: React.FC<Props> = ({children}) => {
  const router = useRouter();

  return (
    <Fragment>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({behavior: 'auto', top: 0})}>
        <m.div
          key={router.pathname}
          animate="visible"
          className="h-full"
          exit="hidden"
          initial="hidden"
          layout="preserve-aspect"
          transition={transition}
          variants={variants}
        >
          {children}
        </m.div>
      </AnimatePresence>
      <Script dangerouslySetInnerHTML={{__html: scrollRestorationScript}} id="scroll-restoration-script" />
    </Fragment>
  );
};
