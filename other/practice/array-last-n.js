const lastN = (arr, n = 1) => {
  if (!Array.isArray(arr)) return [];
  return arr.slice(Math.max(arr.length - n, 0));
};

module.exports = lastN;
