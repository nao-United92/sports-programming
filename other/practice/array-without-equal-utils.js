const arrayWithoutEqual = (arr, value) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  return arr.filter(item => item !== value);
};

module.exports = arrayWithoutEqual;
