const takeRightWhile = (array, predicate) => {
  if (!Array.isArray(array)) return [];
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      result.unshift(array[i]);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeRightWhile;
