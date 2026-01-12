export const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.reduce((acc, val) => acc.concat(val), []);
};
