
export const truncate = (str, length, omission = '...') => {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length <= length) {
    return str;
  }
  if (length <= omission.length) {
    return omission.slice(0, length);
  }
  return str.slice(0, length - omission.length) + omission;
};
