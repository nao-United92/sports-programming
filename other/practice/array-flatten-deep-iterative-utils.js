// other/practice/array-flatten-deep-iterative-utils.js

/**
 * Iteratively flattens a deeply nested array.
 *
 * @param {Array} arr The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
function arrayFlattenDeepIterative(arr) {
  const result = [];
  // Use a stack to manage elements to process.
  // Push elements in reverse order to process them in original order when popped.
  const stack = [...arr].reverse(); 

  while (stack.length > 0) {
    const item = stack.pop(); // Get the last item from the stack (DFS)

    if (Array.isArray(item)) {
      // If it's an array, push its elements onto the stack in reverse order
      // so they are popped in the correct order.
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push(item[i]);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = arrayFlattenDeepIterative;