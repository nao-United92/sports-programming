const arrayMove = (arr, fromIndex, toIndex) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof fromIndex !== 'number' || typeof toIndex !== 'number' || !Number.isInteger(fromIndex) || !Number.isInteger(toIndex)) {
    throw new TypeError('Expected fromIndex and toIndex to be integers.');
  }

  const newArr = [...arr]; // Create a shallow copy

  // Handle fromIndex directly with splice's native behavior for out-of-bounds.
  // splice handles negative fromIndex relative to array.length
  const [element] = newArr.splice(fromIndex, 1);

  // If no element was removed (fromIndex was out of bounds or invalid resulting in no deletion),
  // return the original array copy.
  if (element === undefined) {
    return arr; // Return the original array copy as no change occurred.
  }

  // Handle toIndex. splice also handles negative toIndex and out-of-bounds toIndex.
  newArr.splice(toIndex, 0, element);

  return newArr;
};

module.exports = arrayMove;
