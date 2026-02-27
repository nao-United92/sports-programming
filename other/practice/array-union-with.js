const unionWith = (comparator, ...arrays) => {
  const result = [];
  for (const array of arrays) {
    if (!Array.isArray(array)) continue;
    for (const item of array) {
      const isDuplicate = result.some(resItem => comparator(item, resItem));
      if (!isDuplicate) {
        result.push(item);
      }
    }
  }
  return result;
};

module.exports = unionWith;
