/**
 * Returns the symmetric difference of multiple arrays.
 * 
 * @param {...Array} arrays - The arrays to compute the symmetric difference for.
 * @returns {Array} - The symmetric difference of the input arrays.
 */
function arraySymmetricDifferenceMultiple(...arrays) {
  if (arrays.length === 0) return [];
  
  const getSymmetricDifference = (arr1, arr2) => {
    const s1 = new Set(arr1);
    const s2 = new Set(arr2);
    
    const result = [];
    for (const item of arr1) {
      if (!s2.has(item)) {
        result.push(item);
      }
    }
    for (const item of arr2) {
      if (!s1.has(item)) {
        result.push(item);
      }
    }
    return result;
  };

  return arrays.reduce((acc, curr) => getSymmetricDifference(acc, curr));
}

module.exports = arraySymmetricDifferenceMultiple;
