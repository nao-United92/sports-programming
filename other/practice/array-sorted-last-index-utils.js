const sortedLastIndex = (arr, value) => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > value) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return high;
};

module.exports = sortedLastIndex;
