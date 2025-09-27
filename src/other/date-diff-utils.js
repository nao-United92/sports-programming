const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

/**
 * Calculates the number of days between two dates.
 * @param {Date} date1 The first date.
 * @param {Date} date2 The second date.
 * @returns {number} The number of days between the two dates.
 */
export const daysBetween = (date1, date2) => {
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.floor((utc2 - utc1) / DAY_IN_MILLISECONDS);
};
