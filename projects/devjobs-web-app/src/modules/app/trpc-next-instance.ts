import {httpBatchLink, loggerLink} from '@trpc/client';
import {createTRPCNext} from '@trpc/next';

import {getBaseUrl} from './get-base-url';
import {AppRouter} from './trpc-router';

const logsLink = loggerLink({
  enabled: (opts) =>
    process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
});

const endpointLink = httpBatchLink({url: `${getBaseUrl()}/api/trpc`});

const trpcInstance = createTRPCNext<AppRouter>({
  config: () => ({
    links: [logsLink, endpointLink],
  }),
  ssr: false,
});

export const useTrcp = trpcInstance.useContext;

export const {withTRPC} = trpcInstance;
