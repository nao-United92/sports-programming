/**
 * Deeply flattens an array using an iterative approach.
 * @param {any[]} arr 
 * @returns {any[]}
 */
const deepFlattenIterative = (arr) => {
  const result = [];
  const stack = [...arr];
  while (stack.length > 0) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
};

module.exports = deepFlattenIterative;
