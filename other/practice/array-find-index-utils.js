const findIndex = (arr, predicate) => {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return i;
    }
  }
  return -1;
};

module.exports = findIndex;
