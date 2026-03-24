function fillWithFunction(array, fn, start = 0, end = array.length) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  for (let i = start; i < end; i++) {
    if (i >= 0 && i < array.length) {
      array[i] = fn(i, array);
    }
  }
  return array;
}
module.exports = fillWithFunction;
