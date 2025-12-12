const max = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return Math.max(...arr);
};

module.exports = { max };
