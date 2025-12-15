const sortedUniqBy = (arr, iteratee) => {
  if (arr.length === 0) {
    return [];
  }

  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (iteratee(arr[i]) !== iteratee(arr[i - 1])) {
      result.push(arr[i]);
    }
  }

  return result;
};

module.exports = sortedUniqBy;
