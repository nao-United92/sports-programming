const findDuplicates = (arr, iteratee = (item) => item) => {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of arr) {
    const key = iteratee(item);
    if (seen.has(key)) {
      duplicates.add(item);
    } else {
      seen.add(key);
    }
  }

  return Array.from(duplicates);
};

module.exports = { findDuplicates };