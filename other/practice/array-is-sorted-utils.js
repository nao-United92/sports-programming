const isSorted = (arr, comparator = (a, b) => a - b) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (comparator(arr[i], arr[i + 1]) > 0) {
      return false;
    }
  }
  return true;
};

module.exports = isSorted;
