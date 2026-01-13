
export const differenceByPredicate = (arr1, arr2, predicate) => {
  return arr1.filter(item1 => !arr2.some(item2 => predicate(item1, item2)));
};
