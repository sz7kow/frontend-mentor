import zod from 'zod';

import {procedure} from '~/app/trpc-instance';

const input = zod.object({
  isFullTime: zod.boolean().optional(),
  limit: zod.number().optional(),
  location: zod.string().optional(),
  position: zod.string().optional(),
  skip: zod.number().optional(),
});

export const getManyProcedure = procedure
  .input(input)
  .query(({ctx, input: {isFullTime, limit, location, position, skip}}) =>
    ctx.prisma.jobOffer.findMany({
      include: {
        company: true,
      },
      orderBy: [{createdAtTimestamp: 'asc'}],
      skip,
      take: limit,
      where: {
        contract: {equals: isFullTime ? 'Full Time' : undefined},
        location: {contains: location, mode: 'insensitive'},
        position: {contains: position, mode: 'insensitive'},
      },
    })
  );
