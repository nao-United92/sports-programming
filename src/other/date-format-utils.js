/**
 * Formats a Date object into a string based on a specified format.
 * @param {Date} date The date to format.
 * @param {string} format The format string (e.g., 'YYYY-MM-DD hh:mm:ss').
 * @returns {string} The formatted date string.
 */
export const formatDate = (date, format) => {
  const o = {
    'M+': date.getMonth() + 1, // Month
    'D+': date.getDate(), // Day
    'h+': date.getHours(), // Hour
    'm+': date.getMinutes(), // Minute
    's+': date.getSeconds(), // Second
    'q+': Math.floor((date.getMonth() + 3) / 3), // Quarter
    'S': date.getMilliseconds(), // Millisecond
  };
  if (/(Y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return format;
};