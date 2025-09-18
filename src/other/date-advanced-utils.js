
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

/**
 * Calculates the number of business days between two dates.
 *
 * @param {Date} startDate The start date.
 * @param {Date} endDate The end date.
 * @returns {number} The number of business days.
 */
export function calculateBusinessDays(startDate, endDate) {
  if (!(startDate instanceof Date) || isNaN(startDate) || !(endDate instanceof Date) || isNaN(endDate)) {
    return 0;
  }

  let count = 0;
  const curDate = new Date(startDate.getTime());

  while (curDate <= endDate) {
    const dayOfWeek = curDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++;
    }
    curDate.setDate(curDate.getDate() + 1);
  }

  return count;
}
