
const deepFreeze = (obj) => {
  if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach(prop => {
      deepFreeze(obj[prop]);
    });
    Object.freeze(obj);
  }
  return obj;
};

module.exports = { deepFreeze };
