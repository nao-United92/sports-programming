const sortedLastIndex = (array, value) => {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (array[mid] <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

module.exports = sortedLastIndex;
