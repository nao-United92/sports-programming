
export const lowerFirst = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
};
