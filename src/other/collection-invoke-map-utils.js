import { get } from './object-access-utils';
import { isArray, isObject } from './type-check-utils';

export const invokeMap = (collection, path, ...args) => {
  if (collection == null) {
    return [];
  }

  const result = [];
  const isArr = isArray(collection);
  const keys = isArr ? collection : Object.keys(collection);

  for (let i = 0; i < keys.length; i++) {
    const item = isArr ? collection[i] : collection[keys[i]];
    const func = typeof path === 'function' ? path : get(item, path);

    if (typeof func === 'function') {
      result.push(func.apply(item, args));
    } else {
      result.push(undefined); // Or throw an error, depending on desired behavior
    }
  }
  return result;
};
