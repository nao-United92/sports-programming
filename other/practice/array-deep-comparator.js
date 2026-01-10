const isDeepEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Both arguments must be arrays.');
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!isDeepEqual(val1, val2)) {
        return false;
      }
    } else if (typeof val1 === 'object' && val1 !== null && !Array.isArray(val1) &&
               typeof val2 === 'object' && val2 !== null && !Array.isArray(val2)) {
      if (Object.keys(val1).length !== Object.keys(val2).length) {
        return false;
      }
      for (const key in val1) {
        if (Object.prototype.hasOwnProperty.call(val1, key) &&
            Object.prototype.hasOwnProperty.call(val2, key)) {
          if (val1[key] !== val2[key]) {
            return false;
          }
        } else {
          return false;
        }
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

module.exports = { isDeepEqual };
