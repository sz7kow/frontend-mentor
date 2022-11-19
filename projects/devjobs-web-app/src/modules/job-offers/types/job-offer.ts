import {JobOfferEmployer} from '~job-offers/types/job-offer-employer';
import {JobOfferDetails} from '~job-offers/types/job-offer-details';

export interface JobOffer {
  id: string;
  employer: JobOfferEmployer;
  details: JobOfferDetails;
  metadata: {
    createdAt: string;
  };
}
