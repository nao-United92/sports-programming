const groupByObjectKey = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof key !== 'string' || key.length === 0) {
    throw new TypeError('Expected a non-empty string for the key argument.');
  }

  return arr.reduce((acc, item) => {
    if (typeof item !== 'object' || item === null) {
      // Optionally handle non-object items, e.g., skip or throw an error
      return acc;
    }
    const group = item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});
};

export default groupByObjectKey;