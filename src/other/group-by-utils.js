export const groupBy = (array, key) => {
  if (!Array.isArray(array)) {
    return {};
  }
  return array.reduce((acc, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});
};