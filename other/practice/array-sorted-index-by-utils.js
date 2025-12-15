const sortedIndexBy = (arr, value, iteratee) => {
  let low = 0;
  let high = arr.length;
  const iteratedValue = iteratee(value);

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const iteratedMid = iteratee(arr[mid]);

    if (iteratedMid < iteratedValue) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

module.exports = sortedIndexBy;
