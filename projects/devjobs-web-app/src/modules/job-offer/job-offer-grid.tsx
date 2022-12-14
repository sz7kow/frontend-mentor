import {Company, JobOffer} from '@prisma/client';
import {AnimatePresence, m} from 'framer-motion';
import Link from 'next/link';

import {Card} from '~/common/card';
import {CompanyLogo} from '~/company/company-logo';

import {JobOfferMetadata} from './job-offer-metadata';

const variant = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: -50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.3,
  type: 'spring',
};

interface Props {
  jobOffers: (JobOffer & {company: Company})[];
}

export const JobOfferGrid: React.FC<Props> = ({jobOffers}) => (
  <ul className="grid gap-y-12.25 tablet:grid-cols-2 tablet:gap-x-2.75 tablet:gap-y-16.25 desktop:grid-cols-3 desktop:gap-x-7.5">
    <AnimatePresence initial={false} mode="popLayout">
      {jobOffers.map(
        ({company: {name, logoBackgroundColor, logoUrl}, contract, id, location, position, postedAtSlug}) => (
          <m.li
            key={id}
            animate="visible"
            exit="hidden"
            initial="hidden"
            layout
            transition={transition}
            variants={variant}
          >
            <Card className="relative pl-8 pb-9.25 pt-11.25 pr-7">
              <CompanyLogo
                className="absolute top-0 -translate-y-2/4"
                companyName={name}
                logoBackgroundColor={logoBackgroundColor}
                logoSrc={logoUrl}
              />
              <div className="mb-10 flex flex-col gap-y-3">
                <JobOfferMetadata contract={contract} postedAtSlug={postedAtSlug} />
                <Link href={id}>
                  <h1 className="text-h3 hover:text-gray-700 tablet:overflow-hidden tablet:text-ellipsis tablet:whitespace-nowrap">
                    {position}
                  </h1>
                </Link>
                <p className="text-base">{name}</p>
              </div>
              <p className="text-h4 text-indigo-700">{location}</p>
            </Card>
          </m.li>
        )
      )}
    </AnimatePresence>
  </ul>
);
