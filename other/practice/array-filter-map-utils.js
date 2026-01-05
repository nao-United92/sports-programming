const arrayFilterMap = (arr, callback) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('Expected a function for the second argument (callback).');
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = callback(arr[i], i, arr);
    // If the callback returns a non-null/non-undefined value, it is included.
    // This implicitly filters out values where the callback might return null or undefined.
    if (mappedValue !== null && mappedValue !== undefined) {
      result.push(mappedValue);
    }
  }
  return result;
};

module.exports = arrayFilterMap;
