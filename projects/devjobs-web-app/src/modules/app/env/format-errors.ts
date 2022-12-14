/* eslint-disable no-underscore-dangle */
import {ZodFormattedError} from 'zod';

export const formatErrors = (errors: ZodFormattedError<Map<string, string>, string>) =>
  Object.entries(errors)
    .map(([name, value]) => (value && '_errors' in value ? `${name}: ${value._errors.join(', ')}\n` : ''))
    .filter(Boolean);
