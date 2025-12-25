const invert = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
};

module.exports = { invert };
