/**
 * Formats a Date object into a string with the specified format.
 * @param {Date} date The Date object to format.
 * @param {string} format The format string (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY HH:mm:ss').
 * @returns {string} The formatted date string.
 */
export function formatDate(date, format) {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
}

/**
 * Checks if two Date objects represent the same day (ignoring time).
 * @param {Date} date1 The first Date object.
 * @param {Date} date2 The second Date object.
 * @returns {boolean} True if both dates are on the same day, false otherwise.
 */
export function isSameDay(date1, date2) {
  if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
    return false;
  }
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Calculates the difference in days between two dates.
 * @param {Date} date1 The first Date object.
 * @param {Date} date2 The second Date object.
 * @returns {number} The difference in days. Returns NaN if either date is invalid.
 */
export function getDayDifference(date1, date2) {
  if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
    return NaN;
  }
  const oneDay = 1000 * 60 * 60 * 24;
  const diffTime = Math.abs(date1.getTime() - date2.getTime());
  return Math.ceil(diffTime / oneDay);
}
