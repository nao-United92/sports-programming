/**
 * Formats a Date object into a string based on a format string.
 * Supported format specifiers:
 * YYYY: full year (e.g., 2023)
 * MM: month with leading zero (01-12)
 * DD: day of month with leading zero (01-31)
 * HH: hour in 24-hour format with leading zero (00-23)
 * mm: minute with leading zero (00-59)
 * ss: second with leading zero (00-59)
 * @param {Date} date The Date object to format.
 * @param {string} formatString The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * @returns {string} The formatted date string.
 */
export function formatDate(date, formatString) {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return formatString
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
}

/**
 * Parses a date string into a Date object based on a format string.
 * Supported format specifiers (must match exactly):
 * YYYY: full year
 * MM: month (01-12)
 * DD: day of month (01-31)
 * HH: hour (00-23)
 * mm: minute (00-59)
 * ss: second (00-59)
 * @param {string} dateString The date string to parse.
 * @param {string} formatString The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * @returns {Date | null} The parsed Date object, or null if parsing fails.
 */
export function parseDate(dateString, formatString) {
  const yearMatch = formatString.match(/YYYY/);
  const monthMatch = formatString.match(/MM/);
  const dayMatch = formatString.match(/DD/);
  const hourMatch = formatString.match(/HH/);
  const minuteMatch = formatString.match(/mm/);
  const secondMatch = formatString.match(/ss/);

  let year = 0, month = 0, day = 1, hour = 0, minute = 0, second = 0;

  // Create a regex from the format string to validate the input string
  const formatRegex = new RegExp(    '^' +    formatString      .replace(/YYYY/, '(\d{4})')      .replace(/MM/, '(\d{2})')')      .replace(/DD/, '(\d{2})')      .replace(/HH/, '(\d{2})')      .replace(/mm/, '(\d{2})')      .replace(/ss/, '(\d{2})') +    '

  const match = dateString.match(formatRegex);
  if (!match) {
    return null; // Input string does not match format
  }

  let matchIndex = 1;
  if (yearMatch) { year = parseInt(match[matchIndex++], 10); }
  if (monthMatch) { month = parseInt(match[matchIndex++], 10) - 1; }
  if (dayMatch) { day = parseInt(match[matchIndex++], 10); }
  if (hourMatch) { hour = parseInt(match[matchIndex++], 10); }
  if (minuteMatch) { minute = parseInt(match[matchIndex++], 10); }
  if (secondMatch) { second = parseInt(match[matchIndex++], 10); }

  const date = new Date(year, month, day, hour, minute, second);
  // Validate if the parsed date matches the input components
  if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day ||
      date.getHours() !== hour || date.getMinutes() !== minute || date.getSeconds() !== second) {
    return null;
  }

  return date;
}  );

  const match = dateString.match(formatRegex);
  if (!match) {
    return null; // Input string does not match format
  }

  let matchIndex = 1;
  if (yearMatch) { year = parseInt(match[matchIndex++], 10); }
  if (monthMatch) { month = parseInt(match[matchIndex++], 10) - 1; }
  if (dayMatch) { day = parseInt(match[matchIndex++], 10); }
  if (hourMatch) { hour = parseInt(match[matchIndex++], 10); }
  if (minuteMatch) { minute = parseInt(match[matchIndex++], 10); }
  if (secondMatch) { second = parseInt(match[matchIndex++], 10); }

  const date = new Date(year, month, day, hour, minute, second);
  // Validate if the parsed date matches the input components
  if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day ||
      date.getHours() !== hour || date.getMinutes() !== minute || date.getSeconds() !== second) {
    return null;
  }

  return date;
}