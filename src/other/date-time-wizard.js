/**
 * Formats a Date object into a specified string format.
 * Supports YYYY, MM, DD, HH, mm, ss.
 * @param {Date} date The date to format.
 * @param {string} format The format string.
 * @returns {string} The formatted date string.
 */
const formatDate = (date, format) => {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
};

/**
 * Calculates the number of days between two Date objects.
 * The result is an integer, ignoring the time part of the dates.
 * @param {Date} date1 The first date.
 * @param {Date} date2 The second date.
 * @returns {number} The number of full days between the two dates.
 */
const daysBetween = (date1, date2) => {
  if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
    return NaN;
  }
  const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

module.exports = { formatDate, daysBetween };
