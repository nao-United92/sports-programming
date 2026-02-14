function insertAt(arr, index, element) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array.');
  }
  if (index < 0 || index > arr.length) {
    throw new Error('Index is out of bounds.');
  }
  const newArr = [...arr];
  newArr.splice(index, 0, element);
  return newArr;
}

module.exports = insertAt;
