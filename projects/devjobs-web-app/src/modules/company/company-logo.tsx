import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  className?: string;
  companyName: string;
  logoBackgroundColor: string;
  logoClassName?: string;
  logoSrc: string;
}

export const CompanyLogo: React.FC<Props> = ({className, companyName, logoBackgroundColor, logoClassName, logoSrc}) => (
  <div
    className={clsx(className, 'flex h-12.5 w-12.5 items-center justify-center rounded-3.75')}
    style={{backgroundColor: logoBackgroundColor}}
  >
    <Image alt={`${companyName} Logo`} className={logoClassName} height={50} src={logoSrc} width={50} />
  </div>
);
