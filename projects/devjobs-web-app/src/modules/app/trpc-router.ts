import {inferRouterInputs, inferRouterOutputs} from '@trpc/server';

import {jobOfferRouter} from '~/job-offer/job-offer-router';

import {router} from './trpc-instance';

export const trpcRouter = router({
  jobOffer: jobOfferRouter,
});

export type AppRouter = typeof trpcRouter;
export type AppRouterInputs = inferRouterInputs<AppRouter>;
export type AppRouterOutputs = inferRouterOutputs<AppRouter>;
