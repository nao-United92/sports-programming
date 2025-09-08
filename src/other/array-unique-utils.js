const uniqueElements = arr => [...new Set(arr)];

const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

const uniqBy = (arr, fn) => {
  const seen = new Set();
  return arr.filter(el => {
    const applied = fn(el);
    if (seen.has(applied)) {
      return false;
    }
    seen.add(applied);
    return true;
  });
};

module.exports = { uniqueElements, uniqueElementsBy, uniqBy };