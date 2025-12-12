const flattenDeep = (arr) => {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
};

module.exports = { flattenDeep };