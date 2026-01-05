/**
 * Calculates the number of days between two date objects.
 * The order of dates does not matter.
 *
 * @param {Date} date1 The first Date object.
 * @param {Date} date2 The second Date object.
 * @returns {number} The number of days between the two dates.
 */
const daysBetween = (date1, date2) => {
  if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
    throw new TypeError('Expected both arguments to be valid Date objects.');
  }

  const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day

  // Set both dates to the start of their day to ignore time components
  const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());

  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.floor(diffTime / oneDay); // Use Math.floor to count full days
};

export default daysBetween;
