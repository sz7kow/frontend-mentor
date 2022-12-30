import clsx from 'clsx';

import {InvoiceStatus} from 'types/invoice';

interface Props {
  className?: string;
  status: InvoiceStatus;
}

const statusClassName = {
  [InvoiceStatus.Draft]: `text-stale-900 bg-stale-900/5 dark:text-stale-300 dark:bg-stale-300/5`,
  [InvoiceStatus.Paid]: `text-green-400 bg-green-400/5`,
  [InvoiceStatus.Pending]: `text-orange-400 bg-orange-400/5`,
};

export const StatusBadge: React.FC<Props> = ({className, status}) => (
  <div className={clsx(className, 'flex h-10 w-26 items-center justify-center rounded-1.25', statusClassName[status])}>
    <p className="text-default font-bold capitalize before:mr-2 before:inline-block before:scale-125 before:bg-inherit before:content-bullet">
      {status}
    </p>
  </div>
);
