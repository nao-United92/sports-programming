const flatten = (arr, depth = 1) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array.");
  }
  if (depth < 1) {
    return arr.slice();
  }
  return arr.reduce(
    (acc, val) =>
      acc.concat(
        depth > 1 && Array.isArray(val) ? flatten(val, depth - 1) : val
      ),
    []
  );
};

module.exports = { flatten };
