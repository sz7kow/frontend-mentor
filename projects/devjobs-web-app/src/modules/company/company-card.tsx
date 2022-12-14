import {Company} from '@prisma/client';

import {ButtonLink} from '~/common/button-link';
import {Card} from '~/common/card';
import {createSlug} from '~/common/create-slug';

import {CompanyLogo} from './company-logo';

export const CompanyCard: React.FC<Company> = ({name, logoBackgroundColor, logoUrl, websiteUrl}) => (
  <Card className="relative flex tablet:h-35 tablet:flex-row tablet:overflow-hidden">
    <CompanyLogo
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 tablet:static tablet:h-35 tablet:w-35 tablet:translate-y-0 tablet:translate-x-0 tablet:rounded-0"
      companyName={name}
      logoBackgroundColor={logoBackgroundColor}
      logoClassName="tablet:scale-200"
      logoSrc={logoUrl}
    />
    <div className="grow px-6 pt-11.5 pb-7.5 tablet:px-10 tablet:py-0 desktop:pr-10.75">
      <div className="flex h-full flex-col items-center gap-y-7.5 tablet:flex-row tablet:justify-between">
        <div className="text-center tablet:text-left">
          <h2 className="mb-1.75 text-h3 tablet:text-h2">{name}</h2>
          <p className="text-base text-gray-700">{`${createSlug(name)}.com`}</p>
        </div>
        <ButtonLink href={websiteUrl} size="small" variant="contrast">
          Company Site
        </ButtonLink>
      </div>
    </div>
  </Card>
);
