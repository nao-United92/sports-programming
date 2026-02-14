const isEmptyValue = (value) => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value === 'object' && Object.keys(value).length === 0 && value.constructor === Object) {
    return true;
  }
  return false;
};

const compact = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.filter((item) => !isEmptyValue(item));
};

module.exports = { compact };
