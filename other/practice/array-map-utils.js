const map = (array, callback) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }
  return array.map(callback);
};

module.exports = { map };
