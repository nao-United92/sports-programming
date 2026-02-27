const pullAll = (array, values) => {
  if (!Array.isArray(array) || !Array.isArray(values)) return array;
  const valuesSet = new Set(values);
  let i = 0;
  while (i < array.length) {
    if (valuesSet.has(array[i])) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
};

module.exports = pullAll;
