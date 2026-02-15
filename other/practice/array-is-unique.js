function isUnique(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array.');
  }
  return new Set(arr).size === arr.length;
}

module.exports = isUnique;
