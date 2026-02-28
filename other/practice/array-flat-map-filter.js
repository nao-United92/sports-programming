
const flatMapFilter = (arr, mapFn, filterFn) =>
  arr.reduce((acc, x) => {
    const mapped = mapFn(x);
    if (filterFn(mapped)) {
      acc.push(mapped);
    }
    return acc;
  }, []);
module.exports = flatMapFilter;
