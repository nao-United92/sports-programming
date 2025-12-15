const sortedLastIndexBy = (arr, value, iteratee) => {
  let low = 0;
  let high = arr.length;
  const iteratedValue = iteratee(value);

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const iteratedMid = iteratee(arr[mid]);

    if (iteratedMid > iteratedValue) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return high;
};

module.exports = sortedLastIndexBy;
