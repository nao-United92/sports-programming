import { isArray, isObject } from './type-check-utils';

export const some = (collection, predicate) => {
  if (collection == null) {
    return false;
  }

  if (isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return true;
      }
    }
  } else if (isObject(collection)) {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(collection[key], key, collection)) {
        return true;
      }
    }
  }
  return false;
};
