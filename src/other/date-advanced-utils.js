
/**
 * Formats a Date object into a string based on the provided format string.
 * Supported format specifiers:
 * YYYY: full year (e.g., 2023)
 * MM: month (01-12)
 * DD: day (01-31)
 * HH: hours (00-23)
 * mm: minutes (00-59)
 * ss: seconds (00-59)
 * @param {Date} date The Date object to format.
 * @param {string} formatString The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * @returns {string} The formatted date string.
 */
export function formatDate(date, formatString) {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return formatString
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
}

/**
 * Adds a specified number of days to a given Date object.
 * @param {Date} date The original Date object.
 * @param {number} days The number of days to add.
 * @returns {Date} A new Date object with the added days.
 */
export function addDays(date, days) {
  if (!(date instanceof Date) || isNaN(date) || typeof days !== 'number') {
    return new Date(NaN);
  }
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
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
 * Returns the number of days in a specific month of a given year.
 * @param {number} year The year.
 * @param {number} month The month (1-12).
 * @returns {number} The number of days in the month.
 */
export function getDaysInMonth(year, month) {
  if (typeof year !== 'number' || typeof month !== 'number' || month < 1 || month > 12) {
    return 0;
  }
  // Month is 0-indexed for Date constructor, so (month) is next month's 0th day
  return new Date(year, month, 0).getDate();
}
