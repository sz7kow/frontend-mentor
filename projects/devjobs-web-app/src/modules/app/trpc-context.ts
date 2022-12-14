import {inferAsyncReturnType} from '@trpc/server';

import {prismaClient} from './prisma-client';

export const createInnerContext = async () => ({
  prisma: prismaClient,
});

export const createContext = async () => createInnerContext();

export type Context = inferAsyncReturnType<typeof createContext>;
