
const formatDate = (date, format = 'YYYY-MM-DD') => {
  if (!(date instanceof Date) || isNaN(date)) {
    return null;
  }

  const pad = (num) => num.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formatMap = {
    YYYY: year,
    MM: pad(month),
    DD: pad(day),
    HH: pad(hours),
    mm: pad(minutes),
    ss: pad(seconds),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => formatMap[match]);
};

module.exports = { formatDate };
