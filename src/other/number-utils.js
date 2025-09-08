/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} number The number to round.
 * @param {number} [decimals=0] The number of decimal places. Can be negative for rounding to tens, hundreds, etc.
 * @returns {number} The rounded number.
 */
const round = (number, decimals = 0) => {
  const factor = 10 ** decimals;
  return Math.round(number * factor) / factor;
};

/**
 * Floors a number to a specified number of decimal places.
 * @param {number} number The number to floor.
 * @param {number} [decimals=0] The number of decimal places. Can be negative for flooring to tens, hundreds, etc.
 * @returns {number} The floored number.
 */
const floor = (number, decimals = 0) => {
  const factor = 10 ** decimals;
  return Math.floor(number * factor) / factor;
};

/**
 * Ceils a number to a specified number of decimal places.
 * @param {number} number The number to ceil.
 * @param {number} [decimals=0] The number of decimal places. Can be negative for ceiling to tens, hundreds, etc.
 * @returns {number} The ceiled number.
 */
const ceil = (number, decimals = 0) => {
  const factor = 10 ** decimals;
  return Math.ceil(number * factor) / factor;
};

/**
 * Checks if a number is within a specified range.
 * By default, it's inclusive of the start and exclusive of the end.
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {boolean} [inclusive=false] If true, the end of the range is also inclusive.
 * @returns {boolean} True if the number is in range, false otherwise.
 */
const inRange = (number, start, end, inclusive = false) => {
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  return inclusive ? number >= min && number <= max : number >= min && number < max;
};

module.exports = { round, floor, ceil, inRange };
