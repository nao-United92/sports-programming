/**
 * Formats a Date object into a string based on a specified format.
 *
 * Supported format specifiers:
 * YYYY: Full year (e.g., 2023)
 * MM: Month with leading zero (01-12)
 * DD: Day of month with leading zero (01-31)
 * HH: Hours with leading zero (00-23)
 * mm: Minutes with leading zero (00-59)
 * ss: Seconds with leading zero (00-59)
 * ms: Milliseconds with leading zero (000-999)
 *
 * @param {Date} date The Date object to format.
 * @param {string} format The format string.
 * @returns {string} The formatted date string.
 */
function formatDate(date, format) {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new TypeError('Expected a valid Date object for the first argument.');
  }
  if (typeof format !== 'string') {
    throw new TypeError('Expected a string for the format argument.');
  }

  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds)
    .replace(/ms/g, milliseconds);
}

export default formatDate;
