const omitBy = (obj, predicate) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }

  const result = {};
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      !predicate(obj[key], key)
    ) {
      result[key] = obj[key];
    }
  }

  return result;
};

module.exports = omitBy;
