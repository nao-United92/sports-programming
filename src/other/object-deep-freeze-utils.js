const deepFreeze = (obj) => {
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach(prop => {
      const propValue = obj[prop];
      if (propValue && typeof propValue === 'object') {
        deepFreeze(propValue);
      }
    });
  }
  return Object.freeze(obj);
};

module.exports = { deepFreeze };