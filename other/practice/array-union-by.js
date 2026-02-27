const unionBy = (iteratee, ...arrays) => {
  const seen = new Set();
  const result = [];
  
  for (const array of arrays) {
    for (const item of array) {
      const val = iteratee(item);
      if (!seen.has(val)) {
        seen.add(val);
        result.push(item);
      }
    }
  }
  
  return result;
};

module.exports = unionBy;
