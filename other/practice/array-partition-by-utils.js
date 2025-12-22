export const partitionBy = (arr, predicate) => {
  if (!Array.isArray(arr)) {
    return [[], []];
  }
  const truthy = [];
  const falsy = [];
  for (const item of arr) {
    if (predicate(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  }
  return [truthy, falsy];
};
