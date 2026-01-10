const union = (...arrays) => {
  // Ensure all arguments are arrays
  if (arrays.some(arg => !Array.isArray(arg))) {
    throw new TypeError('All arguments must be arrays.');
  }

  const resultSet = new Set();
  const result = [];

  for (const arr of arrays) {
    for (const item of arr) {
      if (!resultSet.has(item)) {
        resultSet.add(item);
        result.push(item);
      }
    }
  }
  return result;
};

module.exports = { union };
