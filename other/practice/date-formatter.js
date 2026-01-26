const formatDate = (date, format = 'YYYY-MM-DD') => {
  if (!(date instanceof Date) || isNaN(date)) {
    return null;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('hh', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

const isToday = (date) => {
  if (!(date instanceof Date) || isNaN(date)) {
    return false;
  }
  const today = new Date();
  return date.getFullYear() === today.getFullYear() &&
         date.getMonth() === today.getMonth() &&
         date.getDate() === today.getDate();
}

module.exports = { formatDate, isToday };