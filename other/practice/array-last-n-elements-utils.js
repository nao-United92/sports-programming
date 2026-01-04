const lastN = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (n < 0) {
    return []; // As per plan, return empty for negative n
  }
  return arr.slice(Math.max(0, arr.length - n));
};

module.exports = { lastN };
