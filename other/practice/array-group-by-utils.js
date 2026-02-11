const groupBy = (arr, fn) => {
  return arr.reduce((acc, item) => {
    const key = typeof fn === 'function' ? fn(item) : item[fn];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

export { groupBy };
