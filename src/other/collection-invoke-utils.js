import { get } from './object-access-utils';

export const invoke = (collection, path, ...args) => {
  const func = typeof path === 'function' ? path : get(collection, path);
  if (typeof func === 'function') {
    return func.apply(collection, args);
  }
  return undefined;
};
