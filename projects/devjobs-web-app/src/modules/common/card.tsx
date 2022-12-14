import clsx from 'clsx';

import {Paper} from './paper';

type Props = React.ComponentProps<typeof Paper>;

export const Card: React.FC<Props> = ({className, ...props}) => (
  <Paper {...props} className={clsx(className, 'rounded-1.5')} />
);
