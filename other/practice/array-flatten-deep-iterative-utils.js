const arrayFlattenDeepIterative = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the argument.');
  }

  const result = [];
  const stack = [];
  // Push elements from the original array onto the stack in reverse order
  // so when popped, they are processed from left to right.
  for (let i = arr.length - 1; i >= 0; i--) {
    stack.push(arr[i]);
  }

  while (stack.length > 0) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      // If it's an array, push its elements onto the stack in reverse order
      // to maintain correct flattening order
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push(item[i]);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};

module.exports = arrayFlattenDeepIterative;
