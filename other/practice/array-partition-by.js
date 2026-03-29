const partitionBy = (arr, fn) => arr.reduce((acc, val, i, a) => (acc[fn(val, i, a) ? 0 : 1].push(val), acc), [[], []]);

export { partitionBy };
