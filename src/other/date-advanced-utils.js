/**
 * Gets the week of the month for a given date.
 *
 * @param {Date} date The date to get the week of the month from.
 * @returns {number} The week of the month.
 */
export function getWeekOfMonth(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return NaN;
  }
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return Math.ceil((date.getDate() + firstDay) / 7);
}

/**
 * Checks if a given date is the last day of the month.
 *
 * @param {Date} date The date to check.
 * @returns {boolean} True if the date is the last day of the month, false otherwise.
 */
export function isLastDayOfMonth(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return false;
  }
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay.getMonth() !== date.getMonth();
}