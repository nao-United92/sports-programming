
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
 * Calculates the difference in days between two dates.
 * @param {Date} date1 The first Date object.
 * @param {Date} date2 The second Date object.
 * @returns {number} The difference in days. Returns NaN if either date is invalid.
 */
export function getDayDifference(date1, date2) {
  if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
    return NaN;
  }
  const oneDay = 1000 * 60 * 60 * 24;
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(diffTime / oneDay);
}

/**
 * Checks if a given date falls on a weekend (Saturday or Sunday).
 * @param {Date} date The Date object to check.
 * @returns {boolean} True if the date is a weekend, false otherwise.
 */
export function isWeekend(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return false;
  }
  const day = date.getDay();
  return day === 0 || day === 6; // 0 for Sunday, 6 for Saturday
}

/**
 * Checks if a given date falls on a weekday (Monday to Friday).
 * @param {Date} date The Date object to check.
 * @returns {boolean} True if the date is a weekday, false otherwise.
 */
export function isWeekday(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return false;
  }
  const day = date.getDay();
  return day >= 1 && day <= 5; // 1 for Monday, 5 for Friday
}

/**
 * Adds a specified number of days to a date.
 * @param {Date} date The date to add days to.
 * @param {number} days The number of days to add.
 * @returns {Date} A new Date object with the days added.
 */
export function addDays(date, days) {
  if (!(date instanceof Date) || isNaN(date)) {
    return null;
  }
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Calculates the difference in months between two dates.
 * @param {Date} date1 The first Date object.
 * @param {Date} date2 The second Date object.
 * @returns {number} The difference in months. Returns NaN if either date is invalid.
 */
export function getMonthDifference(date1, date2) {
  if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
    return NaN;
  }
  const months = (date2.getFullYear() - date1.getFullYear()) * 12;
  return months - date1.getMonth() + date2.getMonth();
}

/**
 * Formats a Date object into a "YYYY-MM-DD" string.
 * @param {Date} date The Date object to format.
 * @param {string} [formatStr='YYYY-MM-DD'] The format string. Supported placeholders: YYYY, MM, DD, HH, mm, ss.
 * @returns {string} The formatted date string.
 */
export function formatDate(date, formatStr = 'YYYY-MM-DD') {
  if (!(date instanceof Date) || isNaN(date)) {
    return '';
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return formatStr
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
}

/**
 * Checks if a date is a valid Date object.
 * @param {*} date The value to check.
 * @returns {boolean} True if the value is a valid Date object, false otherwise.
 */
export function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

/**
 * Checks if a date is today.
 * @param {Date} date The date to check.
 * @returns {boolean} True if the date is today, false otherwise.
 */
export function isToday(date) {
  if (!isValidDate(date)) {
    return false;
  }
  const today = new Date();
  return isSameDay(date, today);
}

/**
 * Checks if a date is in the future.
 * @param {Date} date The date to check.
 * @returns {boolean} True if the date is in the future, false otherwise.
 */
export function isFuture(date) {
  if (!isValidDate(date)) {
    return false;
  }
  const now = new Date();
  return date.getTime() > now.getTime();
}

/**
 * Checks if a date is in the past.
 * @param {Date} date The date to check.
 * @returns {boolean} True if the date is in the past, false otherwise.
 */
export function isPast(date) {
  if (!isValidDate(date)) {
    return false;
  }
  const now = new Date();
  return date.getTime() < now.getTime();
}

/**
 * Checks if a given year is a leap year.
 * @param {number} year The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 */
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Returns the number of days in a given month of a given year.
 * @param {number} year The year.
 * @param {number} month The month (1-12).
 * @returns {number} The number of days in the month.
 */
export function getDaysInMonth(year, month) {
  if (month < 1 || month > 12) {
    return 0; // Invalid month
  }
  return new Date(year, month, 0).getDate();
}

/**
 * Gets the start of the week for a given date.
 * @param {Date} date The date to get the start of the week from.
 * @param {number} [startDay=0] The start day of the week (0 for Sunday, 1 for Monday, etc.). Defaults to Sunday.
 * @returns {Date} A new Date object representing the start of the week.
 */
export function startOfWeek(date, startDay = 0) {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = (day < startDay) ? (7 - startDay + day) : (day - startDay);
  newDate.setDate(newDate.getDate() - diff);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

/**
 * Gets the end of the week for a given date.
 * @param {Date} date The date to get the end of the week from.
 * @param {number} [startDay=0] The start day of the week (0 for Sunday, 1 for Monday, etc.). Defaults to Sunday.
 * @returns {Date} A new Date object representing the end of the week.
 */
export function endOfWeek(date, startDay = 0) {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = (day < startDay) ? (7 - startDay + day) : (day - startDay);
  newDate.setDate(newDate.getDate() - diff + 6);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}

