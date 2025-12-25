const isEmpty = (val) => {
  if (val === null || val === undefined) {
    return true;
  }
  if (Array.isArray(val) || typeof val === 'string') {
    return val.length === 0;
  }
  if (typeof val === 'object') {
    return Object.keys(val).length === 0;
  }
  return false;
};

module.exports = { isEmpty };
