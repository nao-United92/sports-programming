const isLeapYear = (year) => {
  if (typeof year === 'number') {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  if (year instanceof Date) {
    const y = year.getFullYear();
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  }
  return false;
};

module.exports = { isLeapYear };
