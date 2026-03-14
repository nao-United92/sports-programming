/**
 * Calculates the ISO week number for a given date.
 * 
 * @param {Date|string|number} date 
 * @returns {number}
 */
const getWeekNumber = (date = new Date()) => {
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    throw new Error('Invalid date');
  }
  
  // Set to Thursday in current week decided by ISO 8601
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  
  // Get first day of year
  const yearStart = new Date(d.getFullYear(), 0, 1);
  
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
};

module.exports = getWeekNumber;
