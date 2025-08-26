export const pull = (array, ...values) => {
  if (!Array.isArray(array)) {
    return array;
  }
  const valuesToRemove = new Set(values);
  let i = 0;
  while (i < array.length) {
    if (valuesToRemove.has(array[i])) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
};

export const pullAll = (array, values) => {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    return array;
  }
  const valuesToRemove = new Set(values);
  let i = 0;
  while (i < array.length) {
    if (valuesToRemove.has(array[i])) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
};

export const pullAllBy = (array, values, iteratee) => {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    return array;
  }
  const iteratedValuesToRemove = new Set(values.map(iteratee));
  let i = 0;
  while (i < array.length) {
    if (iteratedValuesToRemove.has(iteratee(array[i]))) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
};