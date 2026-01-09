export const truncate = (str, length, omission = '...') => {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + omission;
};
