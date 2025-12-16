const unionBy = (...arrays) => {
  const iteratee = typeof arrays[arrays.length - 1] === 'function' ? arrays.pop() : item => item;
  
  const seen = new Set();
  const result = [];

  for (const arr of arrays) {
    if (!Array.isArray(arr)) continue;
    
    for (const item of arr) {
      const computed = iteratee(item);
      if (!seen.has(computed)) {
        seen.add(computed);
        result.push(item);
      }
    }
  }

  return result;
};

module.exports = unionBy;
