const arrayContainsAll = (arr, targetArr) => {
  if (!Array.isArray(arr) || !Array.isArray(targetArr)) {
    throw new TypeError('Expected both arguments to be arrays.');
  }
  if (targetArr.length === 0) {
    return true; // An empty target array is always "contained"
  }
  return targetArr.every(val => arr.includes(val));
};

module.exports = arrayContainsAll;
