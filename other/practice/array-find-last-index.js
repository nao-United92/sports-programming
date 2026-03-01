const arrayFindLastIndex = (arr, fn) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (fn(arr[i], i, arr)) return i;
  }
  return -1;
};

module.exports = arrayFindLastIndex;
