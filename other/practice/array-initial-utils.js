const initial = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.slice(0, -1);
};

module.exports = initial;
