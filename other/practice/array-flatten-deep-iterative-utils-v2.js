/**
 * Iteratively flattens an array deeply using a stack.
 * @param {Array<any>} arr The array to flatten.
 * @returns {Array<any>} The new deeply flattened array.
 */
function flattenDeepIterativeV2(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }

  const result = [];
  const stack = [...arr]; // Initialize stack with array elements

  while (stack.length > 0) {
    const item = stack.shift(); // Get first item (BFS-like)

    if (Array.isArray(item)) {
      // If it's an array, prepend its elements to the stack to process them next
      stack.unshift(...item);
    } else {
      result.push(item);
    }
  }
  return result;
}

module.exports = flattenDeepIterativeV2;
