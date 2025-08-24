/**
 * Formats a date in a specific timezone.
 * @param {Date} date The date to format.
 * @param {string} timezone The IANA timezone name (e.g., 'America/New_York').
 * @param {object} options Intl.DateTimeFormat options.
 * @returns {string} The formatted date string.
 */
export function formatInTimezone(date, timezone, options = {}) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      ...options,
      timeZone: timezone,
    }).format(date);
  } catch (e) {
    console.error('Invalid timezone or options', e);
    return null;
  }
}

/**
 * Converts a date from one timezone to another.
 * Note: This returns a new Date object whose UTC time is shifted.
 * The local time representation of this new Date will appear as the target timezone's time.
 * @param {Date} date The source date.
 * @param {string} targetTimezone The target IANA timezone name.
 * @returns {Date | null} A new Date object representing the time in the target timezone.
 */
export function convertTimezone(date, targetTimezone) {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: targetTimezone,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    });
    const parts = formatter.formatToParts(date);
    const year = parts.find(p => p.type === 'year').value;
    const month = parts.find(p => p.type === 'month').value - 1;
    const day = parts.find(p => p.type === 'day').value;
    const hour = parts.find(p => p.type === 'hour').value;
    const minute = parts.find(p => p.type === 'minute').value;
    const second = parts.find(p => p.type === 'second').value;

    return new Date(Date.UTC(year, month, day, hour, minute, second));
  } catch (e) {
    console.error('Invalid timezone', e);
    return null;
  }
}
