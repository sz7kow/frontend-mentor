import zod from 'zod';

import {procedure} from '~/app/trpc-instance';

const input = zod.object({
  id: zod.string(),
});

export const getOneProcedure = procedure.input(input).query(({ctx, input: {id}}) =>
  ctx.prisma.jobOffer.findUnique({
    include: {company: true},
    where: {
      id: id.length === 24 ? id : new Array(24).fill('0').join(''),
    },
  })
);
