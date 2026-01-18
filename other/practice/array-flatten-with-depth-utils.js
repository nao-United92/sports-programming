// other/practice/array-flatten-with-depth-utils.js

function arrayFlattenWithDepth(arr, depth = 1) {
  if (depth === 0) {
    return arr.slice(); // Return a shallow copy if depth is 0
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result.push(...arrayFlattenWithDepth(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = arrayFlattenWithDepth;
