export enum PaymentTerms {
  OneDay = 86400,
  SevenDays = 604800,
  FourteenDays = 1209600,
  ThirtyDays = 2592000,
}

export interface InvoiceAddress {
  city: string;
  country: string;
  postCode: string;
  street: string;
}

export interface InvoiceClient {
  address: InvoiceAddress;
  email: string;
  name: string;
}

export interface InvoiceItem {
  name: string;
  price: number;
  quantity: number;
}

export enum InvoiceStatus {
  Pending = 'pending',
  Paid = 'paid',
  Draft = 'draft',
}

export interface Invoice {
  address: InvoiceAddress;
  client: InvoiceClient;
  creationTimestamp: number;
  description: string;
  id: string;
  items: InvoiceItem[];
  paymentTerms: PaymentTerms;
  status: InvoiceStatus;
}
