/**
 * Checks if the given date is a weekday.
 * @param {Date} [date=new Date()] - The date to check.
 * @returns {boolean} Returns `true` if the date is a weekday, else `false`.
 */
export const isWeekday = (date = new Date()) => date.getDay() % 6 !== 0;