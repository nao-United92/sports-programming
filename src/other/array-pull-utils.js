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
