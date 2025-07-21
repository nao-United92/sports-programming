
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
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(diffTime / oneDay);
}

/**
 * Checks if a given date falls on a weekend (Saturday or Sunday).
 * @param {Date} date The Date object to check.
 * @returns {boolean} True if the date is a weekend, false otherwise.
 */
export function isWeekend(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return false;
  }
  const day = date.getDay();
  return day === 0 || day === 6; // 0 for Sunday, 6 for Saturday
}

/**
 * Adds a specified number of days to a date.
 * @param {Date} date The date to add days to.
 * @param {number} days The number of days to add.
 * @returns {Date} A new Date object with the days added.
 */
export function addDays(date, days) {
  if (!(date instanceof Date) || isNaN(date)) {
    return null;
  }
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Calculates the difference in months between two dates.
 * @param {Date} date1 The first Date object.
 * @param {Date} date2 The second Date object.
 * @returns {number} The difference in months. Returns NaN if either date is invalid.
 */
export function getMonthDifference(date1, date2) {
  if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
    return NaN;
  }
  const months = (date2.getFullYear() - date1.getFullYear()) * 12;
  return months - date1.getMonth() + date2.getMonth();
}

/**
 * Formats a Date object into a "YYYY-MM-DD" string.
 * @param {Date} date The Date object to format.
 * @returns {string} The formatted date string.
 */
export function formatDateToYYYYMMDD(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

