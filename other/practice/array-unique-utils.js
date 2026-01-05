const arrayUnique = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the argument.');
  }
  return [...new Set(arr)];
};

module.exports = arrayUnique;
