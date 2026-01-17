import { toCamelCase, toSnakeCase } from './string-case-converter.js';

const convertKeys = (obj, converter) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => convertKeys(item, converter));
  }

  return Object.keys(obj).reduce((acc, key) => {
    const newKey = converter(key);
    acc[newKey] = convertKeys(obj[key], converter);
    return acc;
  }, {});
};

export const keysToCamelCase = (obj) => {
  return convertKeys(obj, toCamelCase);
};

export const keysToSnakeCase = (obj) => {
  return convertKeys(obj, toSnakeCase);
};
