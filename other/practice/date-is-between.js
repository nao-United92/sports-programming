/**
 * Checks if a date is between two other dates (inclusive).
 *
 * @param {Date|string|number} date 
 * @param {Date|string|number} start 
 * @param {Date|string|number} end 
 * @returns {boolean}
 */
const isBetween = (date, start, end) => {
  const d = new Date(date).getTime();
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();

  if (isNaN(d) || isNaN(s) || isNaN(e)) {
    throw new Error('Invalid date provided');
  }

  return d >= s && d <= e;
};

module.exports = isBetween;
