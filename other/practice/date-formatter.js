export const formatDate = (date, formatStr = 'YYYY-MM-DD') => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return '';
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() is 0-indexed
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const pad = (num) => num.toString().padStart(2, '0');

  const replacements = {
    YYYY: year,
    MM: pad(month),
    DD: pad(day),
    HH: pad(hours),
    mm: pad(minutes),
    ss: pad(seconds),
    // Add more format specifiers as needed
  };

  let formattedDate = formatStr;
  for (const key in replacements) {
    formattedDate = formattedDate.replace(new RegExp(key, 'g'), replacements[key]);
  }

  return formattedDate;
};