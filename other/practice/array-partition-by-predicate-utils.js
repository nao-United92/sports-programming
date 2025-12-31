// Partitions an array into two groups: one whose elements satisfy `predicate` and one whose elements do not.
export const partitionByPredicate = (arr, predicate) => {
  const passed = [];
  const failed = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      passed.push(arr[i]);
    } else {
      failed.push(arr[i]);
    }
  }
  return [passed, failed];
};