export const dateRange = (startDate, endDate, step = 1) => {
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
  }

  return dates;
};
