const dropWhile = (arr, predicate) => {
  let i = 0;
  while (i < arr.length && predicate(arr[i])) {
    i++;
  }
  return arr.slice(i);
};

module.exports = dropWhile;
