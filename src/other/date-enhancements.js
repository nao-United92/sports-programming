/**
 * Formats a Date object into a 'YYYY-MM-DD' string.
 *
 * @param {Date} date The date to format.
 * @returns {string} The formatted date string.
 */
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Checks if a given year is a leap year.
 *
 * @param {number} year The year to check.
 * @returns {boolean} True if it's a leap year, false otherwise.
 */
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * Gets the number of days in a given month of a year.
 *
 * @param {number} year The year.
 * @param {number} month The month (1-12).
 * @returns {number} The number of days in the month.
 */
const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

module.exports = {
  formatDate,
  isLeapYear,
  daysInMonth,
};
