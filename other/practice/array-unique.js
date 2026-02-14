function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array.');
  }
  return [...new Set(arr)];
}

module.exports = unique;
