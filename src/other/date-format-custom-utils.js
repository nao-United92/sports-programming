/**
 * Formats a Date object into a string based on the provided format string.
 * Supported format specifiers:
 * YYYY: full year (e.g., 2023)
 * YY: two-digit year (e.g., 23)
 * MM: two-digit month (01-12)
 * M: month (1-12)
 * DD: two-digit day (01-31)
 * D: day (1-31)
 * HH: two-digit hour (00-23)
 * H: hour (0-23)
 * hh: two-digit hour (01-12)
 * h: hour (1-12)
 * mm: two-digit minute (00-59)
 * m: minute (0-59)
 * ss: two-digit second (00-59)
 * s: second (0-59)
 * A: AM/PM
 * a: am/pm
 *
 * @param {Date} date The Date object to format.
 * @param {string} format The format string.
 * @returns {string} The formatted date string.
 * @throws {Error} If the date is not a valid Date object.
 */
export function formatDateCustom(date, format) {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid Date object provided.');
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() is 0-indexed
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const pad = (num) => num.toString().padStart(2, '0');

  const replacements = {
    YYYY: year.toString(),
    YY: pad(year % 100),
    MM: pad(month),
    M: month.toString(),
    DD: pad(day),
    D: day.toString(),
    HH: pad(hours),
    H: hours.toString(),
    hh: pad(hours % 12 || 12), // 12-hour format
    h: (hours % 12 || 12).toString(),
    mm: pad(minutes),
    m: minutes.toString(),
    ss: pad(seconds),
    s: seconds.toString(),
    A: hours >= 12 ? 'PM' : 'AM',
    a: hours >= 12 ? 'pm' : 'am',
  };

  let formattedString = format;
  for (const key in replacements) {
    formattedString = formattedString.replace(new RegExp(key, 'g'), replacements[key]);
  }

  return formattedString;
}
