
const getUniqueValues = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('The argument must be an array.');
  }
  return [...new Set(arr)];
};

module.exports = { getUniqueValues };
