export const truncate = (str, maxLength) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + '...';
};
