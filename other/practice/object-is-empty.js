const isEmptyObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return false; // Not an object or is null
  }
  return Object.keys(obj).length === 0 && (obj.constructor === Object || Object.getPrototypeOf(obj) === null);
};

module.exports = { isEmptyObject };
