import clsx from 'clsx';
import {forwardRef} from 'react';

type InputProps = JSX.IntrinsicElements['input'];

interface Props extends InputProps {
  children?: React.ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(({children, className, ...props}, ref) => (
  <label className={clsx(className, 'flex cursor-pointer cursor-pointer items-center gap-x-4 py-2.75')}>
    <input {...props} ref={ref} className="peer sr-only" type="checkbox" />
    <span className="h-6 w-6 rounded-0.75 bg-stale-900/10 bg-center bg-no-repeat peer-checked:bg-indigo-700 peer-checked:bg-[url('/svgs/icon-check.svg')] dark:bg-white/10" />
    <span className="font-bold text-stale-900 dark:text-white">{children}</span>
  </label>
));
