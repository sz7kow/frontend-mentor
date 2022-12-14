import clsx from 'clsx';

type Props = JSX.IntrinsicElements['div'];

export const Paper: React.FC<Props> = ({className, ...props}) => (
  <div {...props} className={clsx(className, 'bg-white transition-colors dark:bg-stale-900')} />
);
