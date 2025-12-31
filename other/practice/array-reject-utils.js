// The opposite of `filter`; this method returns the elements of `collection` that `predicate` doesn't return truthy for.
export const reject = (arr, predicate) => {
  return arr.filter((item, index, array) => !predicate(item, index, array));
};