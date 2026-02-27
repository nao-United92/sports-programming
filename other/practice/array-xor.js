const xor = (...arrays) => {
  const counts = new Map();
  
  for (const array of arrays) {
    const seenInThisArray = new Set(array);
    for (const item of seenInThisArray) {
      counts.set(item, (counts.get(item) || 0) + 1);
    }
  }
  
  const result = [];
  for (const [item, count] of counts.entries()) {
    if (count === 1) {
      result.push(item);
    }
  }
  
  return result;
};

module.exports = xor;
