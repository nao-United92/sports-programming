const pull = (array, ...values) => {
  if (!Array.isArray(array) || array.length === 0) {
    return array;
  }
  const valuesToRemove = values.flat();
  let i = array.length;
  while (i--) {
    if (valuesToRemove.includes(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
};

module.exports = { pull };
