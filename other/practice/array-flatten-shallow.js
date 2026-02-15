function flattenShallow(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array.');
  }
  return [].concat(...arr);
}

module.exports = flattenShallow;
