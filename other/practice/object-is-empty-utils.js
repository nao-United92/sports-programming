const isEmptyObject = (obj) => {
  if (obj === null || obj === undefined || typeof obj !== 'object' || Array.isArray(obj)) {
    return false;
  }
  return Object.keys(obj).length === 0;
};

module.exports = { isEmptyObject };
