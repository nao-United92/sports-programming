/**
 * Calculates the difference between two Date objects in days, hours, and minutes.
 *
 * @param {Date} date1 The first Date object.
 * @param {Date} date2 The second Date object.
 * @returns {Object|null} An object with { days, hours, minutes } or null if inputs are invalid.
 */
export const getDateDifference = (date1, date2) => {
  if (!(date1 instanceof Date) || isNaN(date1) || !(date2 instanceof Date) || isNaN(date2)) {
    return null;
  }

  const diffMilliseconds = Math.abs(date1.getTime() - date2.getTime());
  const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  const remainingHours = diffHours % 24;
  const remainingMinutes = diffMinutes % 60;

  return {
    days: diffDays,
    hours: remainingHours,
    minutes: remainingMinutes,
  };
};
