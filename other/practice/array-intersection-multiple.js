/**
 * Returns the intersection of multiple arrays.
 * @param {...any[][]} arrays 
 * @returns {any[]}
 */
const intersectionMultiple = (...arrays) => {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return [...new Set(arrays[0])];

  return arrays.reduce((acc, curr) => {
    const set = new Set(curr);
    return acc.filter(item => set.has(item));
  }, [...new Set(arrays[0])]);
};

module.exports = intersectionMultiple;
