function fillAll(arr, value) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array.');
  }
  return arr.map(() => value);
}

module.exports = fillAll;
