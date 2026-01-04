const initialN = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (n < 0) {
    return []; // As per plan, return empty for negative n
  }
  return arr.slice(0, n);
};

module.exports = { initialN };
