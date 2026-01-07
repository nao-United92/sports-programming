const takeRightWhile = (array, predicate) => {
  if (!Array.isArray(array)) {
    return [];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (!predicate(array[i], i, array)) {
      return array.slice(i + 1);
    }
  }

  return [...array];
};

module.exports = {
  takeRightWhile,
};