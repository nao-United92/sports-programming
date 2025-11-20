/**
 * Calculates the number of days between two dates.
 * @param {Date} date1 The first date.
 * @param {Date} date2 The second date.
 * @returns {number} The number of days between the two dates.
 */
export const daysBetween = (date1, date2) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  return Math.round(diffInTime / oneDay);
};

/**
 * Checks if a given date is a weekend.
 * @param {Date} date The date to check.
 * @returns {boolean} True if the date is a Saturday or Sunday, false otherwise.
 */
export const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
};

/**
 * Adds or subtracts days from a date.
 * @param {Date} date The date to modify.
 * @param {number} days The number of days to add (can be negative).
 * @returns {Date} The new date.
 */
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 * Formats a Date object into a string based on the specified format.
 *
 * @param {Date} date The Date object to format.
 * @param {string} format The format string (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY HH:mm:ss').
 * @returns {string} The formatted date string.
 */
export const formatDate = (date, format) => {
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
};
