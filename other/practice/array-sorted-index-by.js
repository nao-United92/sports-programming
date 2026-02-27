const sortedIndexBy = (array, value, iteratee) => {
  let low = 0;
  let high = array.length;
  const targetVal = iteratee(value);

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (iteratee(array[mid]) < targetVal) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

module.exports = sortedIndexBy;
