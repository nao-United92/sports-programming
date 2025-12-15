const nth = (arr, n = 0) => {
  if (n < 0) {
    return arr[arr.length + n];
  }
  return arr[n];
};

module.exports = nth;
