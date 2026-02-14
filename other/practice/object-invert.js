const invertObject = (obj) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new TypeError('Expected a non-null, non-array object');
  }

  const inverted = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      inverted[obj[key]] = key;
    }
  }
  return inverted;
};

module.exports = { invertObject };
