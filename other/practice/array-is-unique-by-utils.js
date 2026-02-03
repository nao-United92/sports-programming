export const isUniqueBy = (arr, fn) => {
  const mappedValues = arr.map(typeof fn === 'function' ? fn : (val) => val[fn]);
  return new Set(mappedValues).size === mappedValues.length;
};
