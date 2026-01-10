const padZero = (num) => num < 10 ? '0' + num : String(num);

const format = (date, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new TypeError('Expected a valid Date object for the first argument.');
  }
  if (typeof pattern !== 'string') {
    throw new TypeError('Expected a string for the second argument (format pattern).');
  }

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return pattern
    .replace(/YYYY/g, String(year))
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
};

module.exports = { format };
