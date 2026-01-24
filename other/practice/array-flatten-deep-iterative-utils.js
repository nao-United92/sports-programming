/**
 * Recursively flattens a nested array using an iterative approach (without recursion).
 *
 * @param {Array<any>} arr The array to flatten.
 * @returns {Array<any>} A new array with all sub-array elements concatenated into it recursively.
 */
function flattenDeepIterative(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }

  const result = [];
  const stack = [...arr]; // Use a stack for iterative flattening

  while (stack.length > 0) {
    const item = stack.shift(); // Get the next item from the front (mimics depth-first if pushing to unshift)

    if (Array.isArray(item)) {
      // If it's an array, unshift its elements to the front of the stack
      // This ensures depth-first traversal
      for (let i = item.length - 1; i >= 0; i--) {
        stack.unshift(item[i]);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

export default flattenDeepIterative;