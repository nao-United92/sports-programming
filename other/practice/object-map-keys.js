const objectMapKeys = (obj, fn) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[fn(obj[key], key)] = obj[key];
    return acc;
  }, {});
};

module.exports = objectMapKeys;
