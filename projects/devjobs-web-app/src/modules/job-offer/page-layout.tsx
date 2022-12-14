import {AnimatePresence, m} from 'framer-motion';
import {useRouter} from 'next/router';
import {Fragment} from 'react';

import {PageHeader} from './page-header';

interface Props {
  children?: React.ReactNode;
}

const variant = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: -50,
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

export const PageLayout: React.FC<Props> = ({children}) => {
  const router = useRouter();

  return (
    <Fragment>
      <PageHeader />
      <AnimatePresence mode="wait">
        <m.div
          key={router.route}
          animate="visible"
          className="h-full"
          exit="hidden"
          initial="hidden"
          transition={transition}
          variants={variant}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </Fragment>
  );
};
