const arrayGroupBy = (arr, keyFn) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof keyFn !== 'function' && typeof keyFn !== 'string') {
    throw new TypeError('Expected a function or a string for the second argument.');
  }

  return arr.reduce((acc, item) => {
    const key = typeof keyFn === 'function' ? keyFn(item) : item[keyFn];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

export default arrayGroupBy;
