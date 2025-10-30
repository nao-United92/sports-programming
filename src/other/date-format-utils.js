/**
 * Formats a Date object into a string based on the provided format string.
 *
 * @param {Date} date The Date object to format.
 * @param {string} format The format string.
 *   - YYYY: full year (e.g., 2023)
 *   - MM: month with leading zero (01-12)
 *   - DD: day of month with leading zero (01-31)
 *   - HH: hours with leading zero (00-23)
 *   - mm: minutes with leading zero (00-59)
 *   - ss: seconds with leading zero (00-59)
 *   - MS: milliseconds with leading zero (000-999)
 * @returns {string} The formatted date string.
 */
function formatDate(date, format) {
  if (!(date instanceof Date) || isNaN(date)) {
    return ''; // Return empty string for invalid dates
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

  return format
    .replace(/YYYY/g, String(year))
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds)
    .replace(/MS/g, milliseconds);
}

module.exports = { formatDate };
