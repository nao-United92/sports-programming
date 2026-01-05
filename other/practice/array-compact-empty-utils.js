const arrayCompactEmpty = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the argument.');
  }
  return arr.filter(item => item !== null && item !== undefined && item !== '');
};

module.exports = arrayCompactEmpty;
