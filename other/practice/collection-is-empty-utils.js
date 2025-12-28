const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    // Check if it's a Map or Set
    if (value instanceof Map || value instanceof Set) {
      return value.size === 0;
    }
    // Check if it's a plain object
    return Object.keys(value).length === 0;
  }
  return false;
};

module.exports = { isEmpty };
