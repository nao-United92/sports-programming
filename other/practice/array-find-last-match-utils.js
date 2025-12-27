const findLastMatch = (arr, predicate) => {
  if (!Array.isArray(arr) || arr.length === 0 || typeof predicate !== 'function') {
    return undefined;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};

export default findLastMatch;