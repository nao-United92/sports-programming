const pullAt = (array, indexes) => {
  if (!Array.isArray(array) || !Array.isArray(indexes)) {
    return [];
  }

  const removedElements = [];
  // Filter for valid indexes, remove duplicates, and sort in descending order
  // to prevent splice from affecting subsequent indexes.
  const validSortedIndexes = [...new Set(indexes)]
    .filter(index => index >= 0 && index < array.length)
    .sort((a, b) => b - a);

  for (const index of validSortedIndexes) {
    const [removed] = array.splice(index, 1);
    removedElements.unshift(removed);
  }

  return removedElements;
};

module.exports = { pullAt };
