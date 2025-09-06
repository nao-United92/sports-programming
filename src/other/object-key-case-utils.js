import { deepMapKeys } from './deep-map-keys-utils.js';
import { camelCase, snakeCase } from './case-style-utils.js';

/**
 * Recursively converts all keys in an object to camelCase.
 *
 * @param {Object} obj The object whose keys are to be converted.
 * @returns {Object} A new object with all keys converted to camelCase.
 */
export const camelCaseKeys = (obj) => {
  return deepMapKeys(obj, (value, key) => camelCase(key));
};

/**
 * Recursively converts all keys in an object to snake_case.
 *
 * @param {Object} obj The object whose keys are to be converted.
 * @returns {Object} A new object with all keys converted to snake_case.
 */
export const snakeCaseKeys = (obj) => {
  return deepMapKeys(obj, (value, key) => snakeCase(key));
};
