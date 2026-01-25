const omitKeys = (obj, keys) =>
  Object.keys(obj)
    .filter((key) => !keys.includes(key))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

module.exports = { omitKeys };
