
/**
 * Checks if a date is within a specified range.
 *
 * @param {Date} date - The date to check.
 * @param {Date} start - The start of the range.
 * @param {Date} end - The end of the range.
 * @returns {boolean} - True if the date is within the range, false otherwise.
 */
const isDateInRange = (date, start, end) => {
  if (!(date instanceof Date) || !(start instanceof Date) || !(end instanceof Date)) {
    throw new Error('All arguments must be Date objects.');
  }
  return date >= start && date <= end;
};

module.exports = { isDateInRange };
