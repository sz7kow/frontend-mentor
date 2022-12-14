import clsx from 'clsx';
import {forwardRef} from 'react';

type InputProps = JSX.IntrinsicElements['input'];

interface Props extends InputProps {
  placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(({className, ...props}, ref) => (
  <input
    {...props}
    ref={ref}
    className={clsx(
      className,
      'h-12 w-full bg-transparent px-1 text-stale-900 placeholder:text-stale-900/50 dark:text-white dark:placeholder:text-white/50'
    )}
    type="text"
  />
));
