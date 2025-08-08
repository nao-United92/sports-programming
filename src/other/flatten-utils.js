export const flatten = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
};
