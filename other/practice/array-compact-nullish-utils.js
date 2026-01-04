export const compactNullish = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }
  return array.filter(item => item !== null && typeof item !== 'undefined');
};
