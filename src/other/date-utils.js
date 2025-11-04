/**
 * Formats a Date object into a string (e.g., YYYY-MM-DD).
 * @param {Date} date The date to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date) => {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Checks if a given year is a leap year.
 * @param {number} year The year to check.
 *returns {boolean} True if it is a leap year, false otherwise.
 */
export const isLeapYear = (year) => {
  if (typeof year !== 'number') {
    return false;
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};