import {JobOffer} from '@prisma/client';

import {ButtonLink} from '~/common/button-link';
import {Card} from '~/common/card';
import {List} from '~/common/list';

import {JobOfferMetadata} from './job-offer-metadata';

export const JobOfferCard: React.FC<JobOffer> = ({
  applyUrl,
  contract,
  description,
  location,
  position,
  postedAtSlug,
  requirementsContent,
  requirementsItems,
  roleContent,
  roleItems,
}) => (
  <Card>
    <div className="px-6 pt-9.5 pb-8 tablet:px-12 tablet:pt-11.5 tablet:pb-9.75 desktop:pb-10.75">
      <div className="mb-7.5 flex flex-col gap-y-13.5 tablet:mb-10.5 tablet:flex-row tablet:items-center">
        <div className="flex grow flex-col gap-y-1.5 tablet:gap-y-1">
          <JobOfferMetadata contract={contract} postedAtSlug={postedAtSlug} />
          <h1 className="mb-0.5 text-h3 tablet:mb-1 tablet:text-h1">{position}</h1>
          <p className="text-h4 text-indigo-700">{location}</p>
        </div>
        <ButtonLink className="w-full" href={applyUrl}>
          Apply Now
        </ButtonLink>
      </div>
      <div>
        <p className="tracking-wide tablet:tracking-normal">{description}</p>
        <h2 className="mt-9.5 mb-6.5 text-h3">Requirements</h2>
        <p className="mb-9 tracking-wide tablet:mb-6 tablet:tracking-normal">{requirementsContent}</p>
        <List items={requirementsItems} type="ul" />
        <h2 className="mt-9 mb-6.25 text-h3 tablet:mt-8.75 tablet:mb-8 desktop:mt-11.75 desktop:mb-6">
          What You Will Do
        </h2>
        <p className="mb-8 tablet:mb-6">{roleContent}</p>
        <List items={roleItems} type="ol" />
      </div>
    </div>
  </Card>
);
