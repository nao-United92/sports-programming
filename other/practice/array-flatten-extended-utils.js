const flatten = (array, depth = 1) => {
  if (!Array.isArray(array) || depth < 0) {
    return array; // Return original array if not an array or invalid depth
  }

  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (Array.isArray(item) && depth > 0) {
      result.push(...flatten(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = flatten;
