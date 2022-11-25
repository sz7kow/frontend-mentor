export interface JobOfferDetails {
  position: string;
  description: string;
  contract: string;
  location: string;
  applyUrl: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export interface JobOfferEmployer {
  company: string;
  websiteUrl: string;
  logo: {
    source: string;
    backgroundColor: string;
  };
}

export interface JobOfferMetadata {
  createdAt: string;
}

export interface JobOffer {
  details: JobOfferDetails;
  employer: JobOfferEmployer;
  id: string;
  metadata: JobOfferMetadata;
}
