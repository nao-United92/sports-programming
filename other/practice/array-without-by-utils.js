const withoutBy = (array, values, iteratee) => {
  if (!Array.isArray(array)) {
    return [];
  }
  
  const isFunction = typeof iteratee === 'function';
  const iterateeFunc = isFunction ? iteratee : (item) => item[iteratee];
  
  const valuesSet = new Set(values.map(iterateeFunc));
  
  return array.filter(item => !valuesSet.has(iterateeFunc(item)));
};

module.exports = { withoutBy };
