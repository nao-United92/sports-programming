import { identity } from './function-utils';
import { matches } from './function-utils';
import { property } from './function-utils';

export const iteratee = (func) => {
  if (typeof func === 'function') {
    return func;
  }
  if (func == null) {
    return identity;
  }
  if (typeof func === 'object') {
    return matches(func);
  }
  return property(func);
};
