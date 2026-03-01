const objectInvert = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, {});
};

module.exports = objectInvert;
