const compact = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(Boolean);
};

module.exports = { compact };
