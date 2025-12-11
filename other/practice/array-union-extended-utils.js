const union = (...arrays) => {
  const resultSet = new Set();
  const result = [];

  for (const array of arrays) {
    if (Array.isArray(array)) {
      for (const item of array) {
        if (!resultSet.has(item)) {
          resultSet.add(item);
          result.push(item);
        }
      }
    }
  }
  return result;
};

module.exports = union;
