/**
 * Formats a date into a human-readable "time ago" string.
 *
 * @param {Date|string|number} dateInput The date to format (Date object, ISO string, or timestamp).
 * @returns {string} The formatted "time ago" string.
 */
export const formatTimeAgo = (dateInput) => {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000; // years
  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }
  interval = seconds / 2592000; // months
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }
  interval = seconds / 86400; // days
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600; // hours
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60; // minutes
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
};
