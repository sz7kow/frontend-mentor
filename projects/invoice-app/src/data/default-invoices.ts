import {defaultAddress} from 'data/default-address';
import {Invoice, InvoiceStatus, PaymentTerms} from 'types/invoice';

export const defaultInvoices: Invoice[] = [
  {
    address: defaultAddress,
    client: {
      address: {
        city: 'Sharrington',
        country: 'United Kingdom',
        postCode: 'NR24 5WQ',
        street: '106 Kendell Street',
      },
      email: 'jensenh@mail.com',
      name: 'Jensen Huang',
    },
    creationTimestamp: 1629237600,
    description: 'Re-branding',
    id: 'RT3080',
    items: [
      {
        name: 'Brand Guidelines',
        price: 1800.9,
        quantity: 1,
      },
    ],
    paymentTerms: PaymentTerms.OneDay,
    status: InvoiceStatus.Paid,
  },
  {
    address: defaultAddress,
    client: {
      address: {
        city: 'Bradford',
        country: 'United Kingdom',
        postCode: 'BD1 9PB',
        street: '84 Church Way',
      },
      email: 'alexgrim@mail.com',
      name: 'Alex Grim',
    },
    creationTimestamp: 1629496800,
    description: 'Graphic Design',
    id: 'XM9141',
    items: [
      {
        name: 'Banner Design',
        price: 156.0,
        quantity: 1,
      },
      {
        name: 'Email Design',
        price: 200.0,
        quantity: 2,
      },
    ],
    paymentTerms: PaymentTerms.ThirtyDays,
    status: InvoiceStatus.Pending,
  },
  {
    address: defaultAddress,
    client: {
      address: {
        city: 'Westhall',
        country: 'United Kingdom',
        postCode: 'IP19 3PF',
        street: '79 Dover Road',
      },
      email: 'jm@myco.com',
      name: 'John Morrison',
    },
    creationTimestamp: 1632434400,
    description: 'Website Redesign',
    id: 'RG0314',
    items: [
      {
        name: 'Website Redesign',
        price: 14002.33,
        quantity: 1,
      },
    ],
    paymentTerms: PaymentTerms.SevenDays,
    status: InvoiceStatus.Paid,
  },
  {
    address: defaultAddress,
    client: {
      address: {
        city: 'Carlisle',
        country: 'United Kingdom',
        postCode: 'CA20 2TG',
        street: '63 Warwick Road',
      },
      email: 'alysa@email.co.uk',
      name: 'Alysa Werner',
    },
    creationTimestamp: 1636498800,
    description: 'Logo Concept',
    id: 'RT2080',
    items: [
      {
        name: 'Logo Sketches',
        price: 102.04,
        quantity: 1,
      },
    ],
    paymentTerms: PaymentTerms.OneDay,
    status: InvoiceStatus.Pending,
  },
  {
    address: defaultAddress,
    client: {
      address: {
        city: 'Cambridge',
        country: 'United Kingdom',
        postCode: 'CB5 6EG',
        street: '46 Abbey Row',
      },
      email: 'mellisa.clarke@example.com',
      name: 'Mellisa Clarke',
    },
    creationTimestamp: 1633557600,
    description: 'Re-branding',
    id: 'AA1449',
    items: [
      {
        name: 'New Logo',
        price: 1532.33,
        quantity: 1,
      },
      {
        name: 'Brand Guidelines',
        price: 2500.0,
        quantity: 1,
      },
    ],
    paymentTerms: PaymentTerms.SevenDays,
    status: InvoiceStatus.Pending,
  },
  {
    address: defaultAddress,
    client: {
      address: {
        city: 'Gotham',
        country: 'United States of America',
        postCode: '60457',
        street: '3964  Queens Lane',
      },
      email: 'thomas@dc.com',
      name: 'Thomas Wayne',
    },
    creationTimestamp: 1633039200,
    description: 'Landing Page Design',
    id: 'TY9141',
    items: [
      {
        name: 'Web Design',
        price: 6155.91,
        quantity: 1,
      },
    ],
    paymentTerms: PaymentTerms.ThirtyDays,
    status: InvoiceStatus.Pending,
  },
  {
    address: defaultAddress,
    client: {
      address: {
        city: '',
        country: '',
        postCode: '',
        street: '',
      },
      email: '',
      name: 'Anita Wainwright',
    },
    creationTimestamp: 1636066800,
    description: 'Logo Re-design',
    id: 'FV2353',
    items: [
      {
        name: 'Logo Re-design',
        price: 3102.04,
        quantity: 1,
      },
    ],
    paymentTerms: PaymentTerms.SevenDays,
    status: InvoiceStatus.Draft,
  },
];
