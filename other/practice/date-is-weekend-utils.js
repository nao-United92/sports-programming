export const isWeekend = (date) => {
  if (!(date instanceof Date)) {
    return false;
  }
  const day = date.getDay();
  return day === 0 || day === 6; // 0 for Sunday, 6 for Saturday
};
