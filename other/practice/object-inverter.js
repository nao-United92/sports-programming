const invert = (obj) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new TypeError('Expected an object for the first argument.');
  }
  const inverted = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      inverted[obj[key]] = key;
    }
  }
  return inverted;
};

module.exports = { invert };
