const remove = (arr, predicate) => {
  const removedElements = [];
  let i = 0;
  while (i < arr.length) {
    if (predicate(arr[i])) {
      removedElements.push(arr.splice(i, 1)[0]);
    } else {
      i++;
    }
  }
  return removedElements;
};

module.exports = remove;
