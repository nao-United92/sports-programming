
/**
 * Formats a Date object into a string based on the provided format string.
 * Supported format specifiers:
 * YYYY: Full year (e.g., 2023)
 * MM: Month with leading zero (01-12)
 * DD: Day of month with leading zero (01-31)
 * HH: Hours with leading zero (00-23)
 * mm: Minutes with leading zero (00-59)
 * ss: Seconds with leading zero (00-59)
 *
 * @param {Date} date The Date object to format.
 * @param {string} format The format string.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date, format) => {
  if (!(date instanceof Date) || isNaN(date) || typeof format !== 'string') {
    return ''; // Return empty string for invalid inputs
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
};
