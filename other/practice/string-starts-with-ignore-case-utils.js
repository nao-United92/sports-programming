export const startsWithIgnoreCase = (str, prefix) => {
  if (typeof str !== 'string' || typeof prefix !== 'string') {
    throw new TypeError('Expected both arguments to be strings');
  }
  return str.toLowerCase().startsWith(prefix.toLowerCase());
};
