/**
 * Checks if two dates are the same day (ignoring time).
 * @param {Date} date1 The first date.
 * @param {Date} date2 The second date.
 * @returns {boolean} True if the dates are the same day, false otherwise.
 */
function isSameDay(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date) || isNaN(date1) || isNaN(date2)) {
    return false;
  }
  return date1.getFullYear() === date2.getFullYear() &&
             date1.getMonth() === date2.getMonth() &&
             date1.getDate() === date2.getDate();
}

/**
 * Checks if a date is in the past.
 * @param {Date} date The date to check.
 * @returns {boolean} True if the date is in the past, false otherwise.
 */
function isPastDate(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return false;
  }
  return date.getTime() < new Date().getTime();
}

/**
 * Checks if a date is in the future.
 * @param {Date} date The date to check.
 * @returns {boolean} True if the date is in the future, false otherwise.
 */
function isFutureDate(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return false;
  }
  return date.getTime() > new Date().getTime();
}

/**
 * Checks if a date is between two other dates (inclusive).
 * @param {Date} date The date to check.
 * @param {Date} startDate The start date.
 * @param {Date} endDate The end date.
 * @returns {boolean} True if the date is between the start and end dates, false otherwise.
 */
function isBetweenDates(date, startDate, endDate) {
  if (!(date instanceof Date) || isNaN(date) ||
      !(startDate instanceof Date) || isNaN(startDate) ||
      !(endDate instanceof Date) || isNaN(endDate)) {
    return false;
  }
  const time = date.getTime();
  const start = startDate.getTime();
  const end = endDate.getTime();
  return time >= start && time <= end;
}

/**
 * Checks if a given date falls on a weekend (Saturday or Sunday).
 * @param {Date} date The date to check.
 * @returns {boolean} True if the date is a weekend, false otherwise.
 */
function isWeekend(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return false;
  }
  const day = date.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  return day === 0 || day === 6;
}

module.exports = {
  isSameDay,
  isPastDate,
  isFutureDate,
  isBetweenDates,
  isWeekend
};