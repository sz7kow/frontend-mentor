export interface JobOfferDetails {
  position: string;
  description: string;
  contract: string;
  location: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}
