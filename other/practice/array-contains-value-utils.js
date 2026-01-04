export const containsValue = (array, value) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }
  return array.includes(value);
};
