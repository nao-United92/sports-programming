function isPermutationOf(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Inputs must be arrays');
  }
  if (array1.length !== array2.length) return false;
  
  const countMap = new Map();
  for (const item of array1) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }
  
  for (const item of array2) {
    if (!countMap.has(item)) return false;
    const count = countMap.get(item);
    if (count === 0) return false;
    countMap.set(item, count - 1);
  }
  return true;
}
module.exports = isPermutationOf;
