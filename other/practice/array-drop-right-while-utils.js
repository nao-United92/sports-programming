const arrayDropRightWhile = (arr, predicate) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument (predicate).');
  }

  let i = arr.length - 1;
  while (i >= 0 && predicate(arr[i], i, arr)) {
    i--;
  }
  return arr.slice(0, i + 1);
};

module.exports = arrayDropRightWhile;
