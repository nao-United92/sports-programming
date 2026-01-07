const remove = (array, value) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }

  const removedElements = [];
  let i = 0;
  while (i < array.length) {
    if (array[i] === value) {
      removedElements.push(array[i]);
      array.splice(i, 1);
    } else {
      i++;
    }
  }

  return removedElements;
};

module.exports = { remove };