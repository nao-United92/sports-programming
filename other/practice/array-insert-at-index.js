const insert = (arr, index, newItem) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
  ];
};

module.exports = { insert };
