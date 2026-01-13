const removeFalsy = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array.");
  }
  return arr.filter(Boolean);
};

module.exports = { removeFalsy };
