const objectMapValues = (obj, fn) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = fn(obj[key], key);
    return acc;
  }, {});
};

module.exports = objectMapValues;
