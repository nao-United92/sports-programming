const pullAt = (arr, indexes) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (!Array.isArray(indexes)) {
    throw new TypeError('Expected an array of indexes for the second argument.');
  }

  // Get unique indexes and sort them in descending order to avoid issues when splicing
  const uniqueSortedIndexes = [...new Set(indexes)].sort((a, b) => b - a);
  const pulled = [];

  uniqueSortedIndexes.forEach(index => {
    if (index >= 0 && index < arr.length) {
      pulled.unshift(arr.splice(index, 1)[0]);
    }
  });

  return pulled;
};

export default pullAt;