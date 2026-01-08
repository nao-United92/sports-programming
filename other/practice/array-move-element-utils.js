const moveElement = (arr, fromIndex, toIndex) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (fromIndex < 0 || fromIndex >= arr.length || toIndex < 0 || toIndex >= arr.length) {
    throw new RangeError('fromIndex and toIndex must be valid indices within the array.');
  }

  const newArr = [...arr];
  const [movedElement] = newArr.splice(fromIndex, 1);
  newArr.splice(toIndex, 0, movedElement);
  return newArr;
};

export default moveElement;