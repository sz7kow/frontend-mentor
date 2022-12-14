import {createProxySSGHelpers} from '@trpc/react-query/ssg';

import {createContext} from './trpc-context';
import {trpcRouter} from './trpc-router';

export const getSsgHelpers = async () =>
  createProxySSGHelpers({
    ctx: await createContext(),
    router: trpcRouter,
  });
