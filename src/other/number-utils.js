/**
 * Rounds a number to a specified precision.
 *
 * @param {number} number The number to round.
 * @param {number} [precision=0] The number of decimal places to round to.
 * @returns {number} The rounded number.
 */
export function round(number, precision = 0) {
  if (typeof number !== 'number' || isNaN(number)) {
    return NaN;
  }
  if (typeof precision !== 'number' || isNaN(precision)) {
    precision = 0;
  }

  const multiplier = Math.pow(10, precision);
  return Math.round(number * multiplier) / multiplier;
}