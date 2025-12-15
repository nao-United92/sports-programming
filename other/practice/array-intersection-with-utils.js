const intersectionWith = (arr1, arr2, comparator) => {
  const result = [];
  for (const item1 of arr1) {
    for (const item2 of arr2) {
      if (comparator(item1, item2)) {
        result.push(item1);
        break;
      }
    }
  }
  return result;
};

module.exports = intersectionWith;
