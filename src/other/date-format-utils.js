/**
 * Formats a Date object into 'YYYY-MM-DD' string.
 * @param {Date} date - The date to format.
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