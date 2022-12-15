import Image from 'next/image';
import Link from 'next/link';

import {Container} from '~/common/container';
import {ColorSchemePreferenceToggle} from '~/theme/color-scheme-preference-toggle';

export const PageHeader: React.FC = () => (
  <header className="-mb-10 bg-indigo-700 bg-[url('/svgs/pattern-header-mobile.svg')] bg-cover pt-8 pb-18 tablet:rounded-bl-25 tablet:bg-[url('/svgs/pattern-header-tablet.svg')] tablet:pt-10.5 tablet:pb-21.5 desktop:bg-[url('/svgs/pattern-header-desktop.svg')]">
    <Container className="flex items-center justify-between gap-x-3" size="large">
      <Link href="/" scroll={false}>
        <Image alt="DevJobs Logo" height={32} priority src="/svgs/logo-devjobs.svg" width={115} />
      </Link>
      <ColorSchemePreferenceToggle />
    </Container>
  </header>
);
