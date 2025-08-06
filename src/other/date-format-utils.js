
/**
 * Formats a Date object into a string based on the specified locale and options.
 *
 * @param {Date} date The Date object to format.
 * @param {string} locale The locale string (e.g., 'en-US', 'ja-JP').
 * @param {Object} options Intl.DateTimeFormat options.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date, locale = 'en-US', options = {}) => {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }
  try {
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

/**
 * Returns the number of days in a given month and year.
 *
 * @param {number} year The year (e.g., 2023).
 * @param {number} month The month (1-12, where 1 is January).
 * @returns {number} The number of days in the month.
 */
export const getDaysInMonth = (year, month) => {
  if (typeof year !== 'number' || typeof month !== 'number' || month < 1 || month > 12) {
    return 0;
  }
  // Month is 0-indexed for Date constructor, so we use `month` for the month and `0` for the day to get the last day of the previous month.
  return new Date(year, month, 0).getDate();
};
