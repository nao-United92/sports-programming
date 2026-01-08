const formatDate = (date, format = 'YYYY-MM-DD') => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new TypeError('Expected a valid Date object for the first argument.');
  }
  if (typeof format !== 'string' || format.length === 0) {
    throw new TypeError('Expected a non-empty string for the format argument.');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds)
    .replace(/SSS/g, milliseconds);
};

export default formatDate;