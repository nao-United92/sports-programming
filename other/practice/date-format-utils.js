const padZero = (num) => String(num).padStart(2, '0');

const formatDate = (date, formatStr = 'YYYY-MM-DD hh:mm:ss') => {
  if (!(date instanceof Date) || isNaN(date)) {
    return 'Invalid Date';
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const replacements = {
    YYYY: year,
    YY: String(year).slice(-2),
    MM: padZero(month),
    M: month,
    DD: padZero(day),
    D: day,
    hh: padZero(hours),
    h: hours,
    mm: padZero(minutes),
    m: minutes,
    ss: padZero(seconds),
    s: seconds,
  };

  let formattedString = formatStr;
  for (const key in replacements) {
    formattedString = formattedString.replace(new RegExp(key, 'g'), replacements[key]);
  }

  return formattedString;
};

module.exports = { formatDate };
