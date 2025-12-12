const flattenStack = (array) => {
  if (!Array.isArray(array)) {
    return array;
  }

  const stack = [...array];
  const result = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }

  return result;
};

module.exports = flattenStack;
