const xorBy = (iteratee, ...arrays) => {
  const counts = new Map();
  const firstOccurrence = new Map();
  
  for (const array of arrays) {
    if (!Array.isArray(array)) continue;
    const seenInThisArray = new Set();
    for (const item of array) {
      const key = iteratee(item);
      if (!seenInThisArray.has(key)) {
        seenInThisArray.add(key);
        counts.set(key, (counts.get(key) || 0) + 1);
        if (!firstOccurrence.has(key)) {
          firstOccurrence.set(key, item);
        }
      }
    }
  }
  
  const result = [];
  for (const [key, count] of counts.entries()) {
    if (count === 1) {
      result.push(firstOccurrence.get(key));
    }
  }
  
  return result;
};

module.exports = xorBy;
