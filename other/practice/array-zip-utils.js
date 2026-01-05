const arrayZip = (...arrays) => {
  if (!arrays.every(Array.isArray)) {
    throw new TypeError('Expected all arguments to be arrays.');
  }
  if (arrays.length === 0) {
    return [];
  }

  const maxLength = Math.max(...arrays.map(arr => arr.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map(arr => arr[i]));
  }
  return result;
};

module.exports = arrayZip;
