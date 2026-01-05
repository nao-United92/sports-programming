/**
 * Checks if a given year is a leap year.
 * A year is a leap year if it is divisible by 4,
 * except for end-of-century years which must be divisible by 400.
 *
 * @param {number} year The year to check.
 * @returns {boolean} Returns `true` if the year is a leap year, `false` otherwise.
 */
const isLeapYear = (year) => {
  if (typeof year !== 'number' || !Number.isInteger(year)) {
    throw new TypeError('Expected year to be an integer.');
  }
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

export default isLeapYear;
