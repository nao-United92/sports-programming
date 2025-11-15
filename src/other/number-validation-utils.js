import { isNumber } from './is-number-utils';

/**
 * Checks if `value` is an integer.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 */
export const isInteger = (value) => {
  return isNumber(value) && Number.isInteger(value);
};

/**
 * Checks if `value` is a positive number.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a positive number, else `false`.
 */
export const isPositive = (value) => {
  return isNumber(value) && value > 0;
};

/**
 * Checks if `value` is a negative number.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a negative number, else `false`.
 */
export const isNegative = (value) => {
  return isNumber(value) && value < 0;
};
