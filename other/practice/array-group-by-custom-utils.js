
export const groupByCustom = (arr, predicate) => {
  return arr.reduce((acc, item) => {
    const key = predicate(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};
