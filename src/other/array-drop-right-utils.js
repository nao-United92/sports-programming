const dropRight = (arr, n = 1) => {
  if (!Array.isArray(arr) || n < 0) {
    return [];
  }
  if (n === 0) {
    return [...arr];
  }
  return arr.slice(0, -n);
};

module.exports = { dropRight };