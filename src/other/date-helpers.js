/**
 * Formats a date object into a specified string format.
 * @param {Date} date The date to format.
 * @param {string} format The format string (e.g., 'YYYY-MM-DD').
 * @returns {string} The formatted date string.
 */
export const formatDate = (date, format) => {
  const map = {
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    DD: String(date.getDate()).padStart(2, '0'),
    YYYY: date.getFullYear(),
  };

  return format.replace(/YYYY|MM|DD/gi, (matched) => map[matched]);
};

/**
 * Checks if a given year is a leap year.
 * @param {number} year The year to check.
 * @returns {boolean} True if it's a leap year, false otherwise.
 */
export const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * Gets the number of days in a specific month of a year.
 * @param {number} year The year.
 * @param {number} month The month (1-12).
 * @returns {number} The number of days in the month.
 */
export const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};
