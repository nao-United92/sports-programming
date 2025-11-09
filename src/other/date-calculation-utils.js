/**
 * Calculates the difference in days between two dates, ignoring the time component.
 * @param {Date} date1 The first date.
 * @param {Date} date2 The second date.
 * @returns {number} The absolute difference in days.
 */
const daysDiff = (date1, date2) => {
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return Math.floor(Math.abs(utc2 - utc1) / (1000 * 60 * 60 * 24));
};

/**
 * Checks if a given date is today.
 * @param {Date} date The date to check.
 * @returns {boolean} True if the date is today, false otherwise.
 */
const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
};

/**
 * Determines if a year is a leap year.
 * A leap year is exactly divisible by 4 except for century years (years ending in 00).
 * The century year is a leap year only if it is perfectly divisible by 400.
 * @param {number} year The year to check.
 * @returns {boolean} True if it's a leap year, false otherwise.
 */
const isLeapYear = (year) => {
    if (typeof year !== 'number') return false;
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

/**
 * Formats a date into 'YYYY-MM-DD' format.
 * @param {Date} date The date to format.
 * @returns {string} The formatted date string.
 */
const formatDate = (date) => {
    if (!(date instanceof Date)) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

module.exports = {
    daysDiff,
    isToday,
    isLeapYear,
    formatDate,
};
