const arrayFlattenOneLevel = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the argument.');
  }
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(val) : acc.concat(val), []);
};

module.exports = arrayFlattenOneLevel;