const arrayRemoveBy = (arr, predicate) => {
  const removed = [];
  let i = arr.length;
  while (i--) {
    if (predicate(arr[i])) {
      removed.unshift(arr[i]);
      arr.splice(i, 1);
    }
  }
  return removed;
};

module.exports = arrayRemoveBy;
