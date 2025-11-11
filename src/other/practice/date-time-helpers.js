
/**
 * Checks if a given year is a leap year.
 * The logic follows the Gregorian calendar rules.
 *
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 */
const isLeapYear = (year) => {
  if (typeof year !== 'number' || !Number.isInteger(year)) {
    throw new TypeError('Year must be an integer.');
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * Gets the number of days in the month for a given Date object.
 *
 * @param {Date} date - The date object.
 * @returns {number} The number of days in the month.
 */
const getDaysInMonth = (date) => {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new TypeError('Input must be a valid Date object.');
  }
  // By setting the day to 0, we get the last day of the previous month.
  // So, for a given month, we create a date for the *next* month and day 0.
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
};

module.exports = {
  isLeapYear,
  getDaysInMonth,
};
