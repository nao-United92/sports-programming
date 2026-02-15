function removeFirst(arr, element) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array.');
  }
  const index = arr.indexOf(element);
  if (index === -1) {
    return [...arr]; // Element not found, return a shallow copy
  }
  const newArr = [...arr];
  newArr.splice(index, 1);
  return newArr;
}

module.exports = removeFirst;
