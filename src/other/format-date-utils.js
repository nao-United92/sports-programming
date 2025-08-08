/**
 * Formats a date object into a string with the specified format.
 *
 * @param {Date} date The date to format.
 * @param {string} format The format string (e.g., 'YYYY-MM-DD').
 * @returns {string} The formatted date string.
 */
export const formatDate = (date, format) => {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return format
    .replace(/YYYY/g, String(year))
    .replace(/MM/g, String(month).padStart(2, '0'))
    .replace(/DD/g, String(day).padStart(2, '0'));
};
