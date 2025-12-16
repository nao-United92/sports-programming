const flattenDepth = (arr, depth = 1) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  if (depth <= 0) {
    return arr.slice();
  }

  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
};

module.exports = flattenDepth;
