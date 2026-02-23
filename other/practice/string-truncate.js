export const truncate = (str, length = 30, suffix = '...') => {
  if (typeof str !== 'string') return '';
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
};
