/* eslint-disable no-console */

import {TRPCError} from '@trpc/server';
import {createNextApiHandler} from '@trpc/server/adapters/next';

import {createContext} from '~/app/trpc-context';
import {trpcRouter} from '~/app/trpc-router';

const handleError = ({path, error}: {path: string | undefined; error: TRPCError}) =>
  console.log(`tRPC failed on ${path}: ${error}`);

const trpcEndpointHandler = createNextApiHandler({
  createContext,
  onError: handleError,
  router: trpcRouter,
});

// eslint-disable-next-line import/no-default-export
export default trpcEndpointHandler;
