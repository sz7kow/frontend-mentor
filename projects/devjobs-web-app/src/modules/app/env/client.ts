import zod from 'zod';

import {formatErrors} from './format-errors';

const clientSchema = zod.object({});

const clientRawEnv = {};

const parseResult = clientSchema.safeParse(clientRawEnv);

if (!parseResult.success)
  throw new Error(`Invalid environment variables:\n ${formatErrors(parseResult.error.format())}`);

Object.keys(parseResult.data).forEach((key) => {
  if (!key.startsWith('NEXT_PUBLIC_'))
    throw new Error(`Invalid public environment variable name:\n ${key} \n It must begin with 'NEXT_PUBLIC_'`);
});

export const clientEnv = parseResult.data;
