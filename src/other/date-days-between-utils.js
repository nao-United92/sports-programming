const daysBetween = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Set to UTC midnight to ignore time of day and timezone differences
  d1.setUTCHours(0, 0, 0, 0);
  d2.setUTCHours(0, 0, 0, 0);

  const timeDiff = d2.getTime() - d1.getTime();
  const dayDiff = timeDiff / (1000 * 60 * 60 * 24);

  return Math.abs(dayDiff);
};

module.exports = { daysBetween };
