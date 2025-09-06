
export const flattenDeep = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
};
