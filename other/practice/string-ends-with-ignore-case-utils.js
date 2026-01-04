export const endsWithIgnoreCase = (str, suffix) => {
  if (typeof str !== 'string' || typeof suffix !== 'string') {
    throw new TypeError('Expected both arguments to be strings');
  }
  return str.toLowerCase().endsWith(suffix.toLowerCase());
};
