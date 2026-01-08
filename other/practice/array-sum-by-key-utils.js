const sumByKey = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof key !== 'string' || key.length === 0) {
    throw new TypeError('Expected a non-empty string for the key argument.');
  }

  return arr.reduce((acc, item) => {
    if (typeof item === 'object' && item !== null && typeof item[key] === 'number') {
      return acc + item[key];
    }
    return acc;
  }, 0);
};

export default sumByKey;