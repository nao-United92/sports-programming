const takeRightWhile = (arr, func) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  let i = arr.length;
  while (i-- && func(arr[i], i, arr));
  return arr.slice(i + 1);
};

module.exports = {
  takeRightWhile
};