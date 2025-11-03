/**
 * Checks if the given date is a weekday.
 * @param {Date} date - The date to check.
 * @returns {boolean} True if the date is a weekday, false otherwise.
 */
export const isWeekday = (date) => {
  if (!(date instanceof Date)) {
    return false;
  }
  const day = date.getDay();
  return day >= 1 && day <= 5;
};

/**
 * Checks if the given date is a weekend.
 * @param {Date} date - The date to check.
 * @returns {boolean} True if the date is a weekend, false otherwise.
 */
export const isWeekend = (date) => {
  if (!(date instanceof Date)) {
    return false;
  }
  const day = date.getDay();
  return day === 0 || day === 6;
};

/**
 * Formats a date object to a string 'YYYY-MM-DD'.
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string, or an empty string for invalid input.
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
