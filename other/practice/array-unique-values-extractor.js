const getUniqueValues = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array.");
  }
  return [...new Set(arr)];
};

module.exports = { getUniqueValues };
