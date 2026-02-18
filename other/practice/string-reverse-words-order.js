export const stringReverseWordsOrder = (str) => {
  if (!str) return '';
  return str.trim().split(/\s+/).reverse().join(' ');
};
