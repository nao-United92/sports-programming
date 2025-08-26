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

export const findKey = (obj, predicate) => {
  const pred = createPredicate(predicate);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (pred(obj[key], key, obj)) {
        return key;
      }
    }
  }
  return undefined;
};

export const findLastKey = (obj, predicate) => {
  const pred = createPredicate(predicate);
  const keys = Object.keys(obj);
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (pred(obj[key], key, obj)) {
        return key;
      }
    }
  }
  return undefined;
};