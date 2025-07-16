/**
 * Formats a Date object into a string with the specified format.
 * @param {Date} date - The date object to format.
 * @param {string} format - The format string (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY').
 * @returns {string} The formatted date string.
 */
export function formatDate(date, format) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
}

/**
 * Adds a specified number of days to a Date object.
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to add.
 * @returns {Date} A new Date object with the added days.
 */
export function addDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

/**
 * Checks if two Date objects represent the same day (ignoring time).
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {boolean} True if both dates are on the same day, false otherwise.
 */
export function isSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Calculates the number of days between two dates.
 * @param {Date} date1 The first date.
 * @param {Date} date2 The second date.
 * @returns {number} The number of days between the two dates.
 */
export function daysBetween(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diff = Math.abs(date1.getTime() - date2.getTime());
  return Math.round(diff / oneDay);
}

/**
 * Checks if a given date is in the past.
 * @param {Date} date - The date to check.
 * @returns {boolean} True if the date is in the past, false otherwise.
 */
export function isPast(date) {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Ignore time for comparison
  const checkDate = new Date(date);
  checkDate.setHours(0, 0, 0, 0); // Ignore time for comparison
  return checkDate.getTime() < now.getTime();
}

/**
 * Gets the first day of the month for a given date.
 * @param {Date} date - The date to get the start of the month from.
 * @returns {Date} A new Date object representing the first day of the month.
 */
export function startOfMonth(date) {
  const newDate = new Date(date);
  newDate.setDate(1);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

/**
 * Gets the last day of the month for a given date.
 * @param {Date} date - The date to get the end of the month from.
 * @returns {Date} A new Date object representing the last day of the month.
 */
export function endOfMonth(date) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1, 0);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}