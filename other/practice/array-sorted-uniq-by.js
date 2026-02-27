const sortedUniqBy = (array, iteratee) => {
  if (!Array.isArray(array)) return [];
  if (array.length === 0) return [];

  const result = [array[0]];
  let lastSeen = iteratee(array[0]);

  for (let i = 1; i < array.length; i++) {
    const current = iteratee(array[i]);
    if (current !== lastSeen) {
      result.push(array[i]);
      lastSeen = current;
    }
  }
  return result;
};

module.exports = sortedUniqBy;
