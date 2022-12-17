import {PrismaClient} from '@prisma/client';

import {companies} from './constants/companies';
import {jobOffers} from './constants/job-offers';

const prismaClient = new PrismaClient();

export const seedDatabase = async () => {
  await prismaClient.jobOffer.deleteMany({});
  await prismaClient.company.deleteMany({});

  await prismaClient.company.createMany({data: companies});
  await prismaClient.jobOffer.createMany({data: jobOffers});
};

seedDatabase().finally(() => prismaClient.$disconnect());
