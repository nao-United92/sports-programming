
export const countWords = (str) => {
  if (!str || typeof str !== 'string') {
    return 0;
  }
  const trimmedStr = str.trim();
  if (trimmedStr === '') {
    return 0;
  }
  return trimmedStr.split(/\s+/).length;
};

export const reverseString = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
};
