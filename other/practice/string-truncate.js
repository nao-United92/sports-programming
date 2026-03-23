// Truncate string to a specific length
export const truncate = (string, length, omission = '...') => {
  if (typeof string !== 'string') return '';
  if (string.length <= length) return string;
  return string.slice(0, length) + omission;
};
