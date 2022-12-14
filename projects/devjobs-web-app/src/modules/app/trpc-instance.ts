import {initTRPC} from '@trpc/server';

import {Context} from './trpc-context';

export const trpcInstance = initTRPC.context<Context>().create({
  errorFormatter: ({shape}) => shape,
});

export const {procedure, router} = trpcInstance;
