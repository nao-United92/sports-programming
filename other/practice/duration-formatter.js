/**
 * Formats a duration in milliseconds into a human-readable string (e.g., "1h 30m 15s").
 * Includes days, hours, minutes, and seconds.
 *
 * @param {number} ms The duration in milliseconds.
 * @returns {string} The formatted duration string.
 */
const formatDuration = (ms) => {
  if (typeof ms !== 'number' || isNaN(ms) || ms < 0) {
    return 'Invalid duration';
  }

  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;
  const remainingHours = hours % 24;

  const parts = [];
  if (days > 0) {
    parts.push(`${days}d`);
  }
  if (remainingHours > 0) {
    parts.push(`${remainingHours}h`);
  }
  if (remainingMinutes > 0) {
    parts.push(`${remainingMinutes}m`);
  }
  if (remainingSeconds > 0 || parts.length === 0) { // If duration is 0ms, show "0s"
    parts.push(`${remainingSeconds}s`);
  }

  return parts.join(' ');
};

export default formatDuration;