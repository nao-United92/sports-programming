
/**
 * Formats a Date object into a custom string format.
 * @param {Date} date The Date object to format.
 * @param {string} format The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * @returns {string} The formatted date string.
 */
export function formatDate(date, format) {
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
}

/**
 * Checks if two Date objects represent the same day (ignoring time).
 * @param {Date} date1 The first Date object.
 * @param {Date} date2 The second Date object.
 * @returns {boolean} True if both dates are on the same day, false otherwise.
 */
export function isSameDay(date1, date2) {
  if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
    return false;
  }
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Adds a specified number of days to a Date object.
 * @param {Date} date The original Date object.
 * @param {number} days The number of days to add.
 * @returns {Date} A new Date object with the added days.
 */
export function addDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

/**
 * Calculates the difference in days between two Date objects.
 * @param {Date} date1 The first Date object.
 * @param {Date} date2 The second Date object.
 * @returns {number} The difference in days (positive if date1 is after date2, negative otherwise).
 */
export function diffDays(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffTime = date1.getTime() - date2.getTime();
  return Math.round(diffTime / oneDay);
}

/**
 * Checks if a given date is today.
 * @param {Date} date The Date object to check.
 * @returns {boolean} True if the date is today, false otherwise.
 */
export function isToday(date) {
  const today = new Date(Date.now());
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Returns a new Date object set to the beginning of the day (00:00:00).
 * @param {Date} date The original Date object.
 * @returns {Date} A new Date object at the start of the day.
 */
export function startOfDay(date) {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

/**
 * Returns a new Date object set to the end of the day (23:59:59).
 * @param {Date} date The original Date object.
 * @returns {Date} A new Date object at the end of the day.
 */
export function endOfDay(date) {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}

/**
 * Formats a date to a relative time string (e.g., "2 days ago", "3 hours from now").
 * @param {Date} date The date to format.
 * @param {Date} [now=new Date()] The reference date for comparison. Defaults to current date.
 * @returns {string} The relative time string.
 */
export function formatRelativeTime(date, now = new Date()) {
  const seconds = Math.round((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30.4);
  const years = Math.round(days / 365);

  if (seconds < 45) {
    return 'just now';
  } else if (seconds < 90) {
    return 'a minute ago';
  } else if (minutes < 45) {
    return `${minutes} minutes ago`;
  } else if (minutes < 90) {
    return 'an hour ago';
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (hours < 48) {
    return 'yesterday';
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (days < 60) {
    return 'a month ago';
  } else if (months < 12) {
    return `${months} months ago`;
  } else if (years < 2) {
    return 'a year ago';
  } else {
    return `${years} years ago`;
  }
}

/**
 * Gets the current timestamp in milliseconds.
 * @returns {number} The current timestamp.
 */
export function getCurrentTimestamp() {
  return Date.now();
}

