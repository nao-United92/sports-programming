const flattenDepth = (arr, depth = 1) => {
  if (depth < 1 || !Array.isArray(arr)) {
    return arr;
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result.push(...flattenDepth(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

module.exports = { flattenDepth };