/**
 * Returns the quarter (1-4) of the year for a given date.
 *
 * @param {Date|string|number} date 
 * @returns {number}
 */
const getQuarter = (date = new Date()) => {
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    throw new Error('Invalid date');
  }
  return Math.floor(d.getMonth() / 3) + 1;
};

module.exports = getQuarter;
