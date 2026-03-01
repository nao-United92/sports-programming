const arrayNthElement = (arr, n = 0) => {
  if (n > 0) return arr.slice(n, n + 1)[0];
  return arr.slice(n)[0];
};

module.exports = arrayNthElement;
