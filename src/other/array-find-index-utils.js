import { isFunction, isObject, isArray } from './type-check-utils.js';

const createPredicate = (predicate) => {
  if (isFunction(predicate)) {
    return predicate;
  }
  if (isArray(predicate)) {
    return (value) => value[predicate[0]] === predicate[1];
  }
  if (isObject(predicate)) {
    return (value) => {
      for (const key in predicate) {
        if (value[key] !== predicate[key]) {
          return false;
        }
      }
      return true;
    };
  }
  return (value) => value === predicate;
};

export const findIndex = (array, predicate, fromIndex = 0) => {
  const pred = createPredicate(predicate);
  let index = fromIndex >= 0 ? fromIndex : Math.max(array.length + fromIndex, 0);

  for (; index < array.length; index++) {
    if (pred(array[index], index, array)) {
      return index;
    }
  }
  return -1;
};

export const findLastIndex = (array, predicate, fromIndex = array.length - 1) => {
  const pred = createPredicate(predicate);
  let index = fromIndex >= 0 ? Math.min(fromIndex, array.length - 1) : array.length + fromIndex;

  for (; index >= 0; index--) {
    if (pred(array[index], index, array)) {
      return index;
    }
  }
  return -1;
};
