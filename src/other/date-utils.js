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
