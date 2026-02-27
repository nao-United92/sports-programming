const mapValues = (array, iteratee) => {
  if (!Array.isArray(array)) return [];
  return array.map((item) => {
    const result = {};
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        result[key] = iteratee(item[key], key, item);
      }
    }
    return result;
  });
};

module.exports = mapValues;
