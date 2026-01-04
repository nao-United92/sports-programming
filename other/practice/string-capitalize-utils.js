export const capitalize = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string argument');
  }
  if (str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
