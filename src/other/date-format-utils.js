/**
 * Formats a Date object into 'YYYY-MM-DD HH:mm:ss' format.
 * @param {Date} date The date to format.
 * @returns {string} The formatted date string.
 */
export const formatDateTime = (date) => {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }

  const pad = (num) => num.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};