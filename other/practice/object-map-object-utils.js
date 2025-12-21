const mapObject = (obj, iteratee) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }

  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = iteratee(obj[key], key, obj);
    }
  }

  return result;
};

module.exports = mapObject;
