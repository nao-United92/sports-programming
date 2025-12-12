const min = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return Math.min(...arr);
};

module.exports = { min };
