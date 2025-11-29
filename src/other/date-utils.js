// src/other/date-utils.js

/**
 * Formats a Date object into a 'YYYY-MM-DD' string.
 *
 * @param {Date} date The Date object to format.
 * @returns {string} The formatted date string.
 */
const formatDate = (date) => {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

module.exports = {
  formatDate,
};