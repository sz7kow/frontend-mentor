import {router} from '~/app/trpc-instance';

import {getManyProcedure} from './get-many-procedure';
import {getOneProcedure} from './get-one-procedure';

export const jobOfferRouter = router({
  getMany: getManyProcedure,
  getOne: getOneProcedure,
});
