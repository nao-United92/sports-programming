const flatMap = (arr, callback) => {
  if (!Array.isArray(arr) || typeof callback !== 'function') {
    return [];
  }
  return arr.map(callback).flat();
};

module.exports = { flatMap };
