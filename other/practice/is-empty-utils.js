const isEmpty = (val) => {
  if (val == null) {
    return true;
  }
  if (typeof val === 'string' || Array.isArray(val)) {
    return val.length === 0;
  }
  if (typeof val === 'object') {
    if (val.constructor !== Object) {
      return false;
    }
    return Object.keys(val).length === 0;
  }
  return false;
};

module.exports = isEmpty;
