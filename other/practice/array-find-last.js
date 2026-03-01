const arrayFindLast = (arr, fn) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (fn(arr[i], i, arr)) return arr[i];
  }
  return undefined;
};

module.exports = arrayFindLast;
