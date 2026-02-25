export const stringTruncate = (str, length, ending = '...') => {
  if (typeof str !== 'string') return '';
  if (str.length <= length) return str;
  return str.substring(0, length - ending.length) + ending;
};
