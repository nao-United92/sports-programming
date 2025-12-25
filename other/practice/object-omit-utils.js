const omit = (obj, keys) =>
  Object.keys(obj)
    .filter(k => !keys.includes(k))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});

module.exports = { omit };
