// Creates a slice of `array` with elements taken from the beginning. Elements are taken until `predicate` returns falsey.
const takeWhile = (array, predicate) => {
  if (!Array.isArray(array)) {
    return [];
  }

  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i, array)) {
      return array.slice(0, i);
    }
  }

  return [...array];
};

module.exports = { takeWhile };