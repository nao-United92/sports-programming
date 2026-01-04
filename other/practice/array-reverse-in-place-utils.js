export const reverseInPlace = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }

  const length = array.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    const temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
  }
  return array;
};
