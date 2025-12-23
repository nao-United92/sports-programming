const takeWhile = (arr, predicate) => {
  const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeWhile;
