const pullAt = (arr, indexes) => {
  if (!Array.isArray(arr) || !Array.isArray(indexes)) {
    return [];
  }

  const removedElements = [];
  const uniqueIndexes = [...new Set(indexes)];
  const sortedIndexes = uniqueIndexes.sort((a, b) => b - a);

  for (const index of sortedIndexes) {
    if (index >= 0 && index < arr.length) {
      const [removed] = arr.splice(index, 1);
      removedElements.unshift(removed);
    }
  }

  return removedElements;
};

module.exports = pullAt;
