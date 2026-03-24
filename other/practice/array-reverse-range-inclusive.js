function reverseRangeInclusive(array, start, end) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  let i = start;
  let j = end;
  while (i < j) {
    if (i < 0 || j >= array.length) break;
    [array[i], array[j]] = [array[j], array[i]];
    i++;
    j--;
  }
  return array;
}
module.exports = reverseRangeInclusive;
