import zod from 'zod';

import {clientEnv} from './client';
import {formatErrors} from './format-errors';

const serverSchema = zod.object({
  DATABASE_URL: zod.string().url(),
  NODE_ENV: zod.enum(['development', 'test', 'production']),
});

const serverRawEnv = process.env;

const parseResult = serverSchema.safeParse(serverRawEnv);

if (!parseResult.success)
  throw new Error(`Invalid environment variables:\n ${formatErrors(parseResult.error.format())}`);

Object.keys(parseResult.data).forEach((key) => {
  if (key.startsWith('NEXT_PUBLIC_')) throw new Error(`You are exposing a server-side env-variable:\n ${key}`);
});

export const serverEnv = {...parseResult.data, ...clientEnv};
