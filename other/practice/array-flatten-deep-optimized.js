/**
 * Flattens a deeply nested array recursively using an iterative, depth-first approach
 * that preserves the original order of elements. This avoids stack overflow issues
 * with very deep arrays.
 *
 * @param {Array<any>} arr The array to flatten.
 * @returns {Array<any>} A new array with all sub-array elements concatenated into it recursively.
 */
function arrayFlattenDeepOptimized(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the input.');
  }

  const result = [];
  const stack = [...arr]; // Initialize stack with array elements (shallow copy)

  while (stack.length > 0) {
    const element = stack.shift(); // Get the first element (FIFO for processing order)

    if (Array.isArray(element)) {
      // If it's an array, prepend its elements to the stack.
      // This makes it depth-first: new elements from the sub-array
      // are processed before other elements already in the stack.
      stack.unshift(...element);
    } else {
      result.push(element);
    }
  }
  return result;
}

module.exports = arrayFlattenDeepOptimized;
