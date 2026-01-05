const arrayGroupByProperty = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof key !== 'string' && typeof key !== 'symbol') {
    throw new TypeError('Expected key to be a string or symbol.');
  }

  return arr.reduce((acc, item) => {
    if (item && typeof item === 'object' && key in item) {
      const keyValue = item[key];
      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }
      acc[keyValue].push(item);
    } else {
      // Handle items without the key or non-object items,
      // For now, let's ignore them.
    }
    return acc;
  }, {});
};

module.exports = arrayGroupByProperty;
