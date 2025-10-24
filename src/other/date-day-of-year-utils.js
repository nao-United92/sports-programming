
/**
 * Calculates the day of the year for a given date.
 *
 * @param {Date} date - The date to process.
 * @returns {number} The day of the year (1-366).
 */
export const dayOfYear = (date) => {
  if (!(date instanceof Date) || isNaN(date)) {
    return NaN;
  }
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};
