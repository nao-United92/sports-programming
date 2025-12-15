const flattenLevel = (arr, level = 1) => {
  if (level === 0) {
    return arr;
  }
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenLevel(val, level - 1)) : acc.concat(val), []);
};

module.exports = flattenLevel;
