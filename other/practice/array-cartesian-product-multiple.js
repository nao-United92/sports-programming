/**
 * Computes the Cartesian product of multiple arrays.
 * 
 * @param {...Array[]} arrays 
 * @returns {Array[]}
 */
const cartesianProductMultiple = (...arrays) => {
  if (arrays.length === 0) return [];
  return arrays.reduce((acc, curr) => {
    return acc.flatMap((row) => curr.map((item) => [...row, item]));
  }, [[]]);
};

module.exports = cartesianProductMultiple;
