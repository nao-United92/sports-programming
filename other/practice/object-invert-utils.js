const invert = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }

  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    if (acc[value]) {
      acc[value].push(key);
    } else {
      acc[value] = [key];
    }
    return acc;
  }, {});
};

module.exports = invert;