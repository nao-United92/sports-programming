export const flattenDeep = (arr) => {
  if (!Array.isArray(arr)) {
    return [arr];
  }

  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenDeep(val) : val);
  }, []);
};
