import { camelCase, snakeCase } from './case-style-utils';
import { isArray, isObject } from './type-check-utils';

const createKeyConverter = (converter) => {
  const convert = (obj) => {
    if (!isObject(obj)) {
      return obj;
    }

    if (isArray(obj)) {
      return obj.map(convert);
    }

    return Object.keys(obj).reduce((result, key) => {
      const newKey = converter(key);
      result[newKey] = convert(obj[key]);
      return result;
    }, {});
  };
  return convert;
};

export const camelCaseKeys = createKeyConverter(camelCase);
export const snakeCaseKeys = createKeyConverter(snakeCase);
