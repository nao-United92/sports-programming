const arrayUnion = (...arrays) => {
  // Flatten all input arrays into a single array
  const flatArray = arrays.reduce((acc, currentArr) => {
    if (!Array.isArray(currentArr)) {
      throw new TypeError('Expected all arguments to be arrays.');
    }
    return acc.concat(currentArr);
  }, []);

  // Use a Set to get unique values while maintaining order of first appearance
  const seen = new Set();
  const result = [];
  for (const item of flatArray) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
};

module.exports = arrayUnion;
