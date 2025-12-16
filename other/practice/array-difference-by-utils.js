const differenceBy = (array, values, iteratee) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const iterateeFunc = typeof iteratee === 'string' 
    ? (item) => item[iteratee]
    : typeof iteratee === 'function'
    ? iteratee
    : (item) => item;

  const valuesSet = new Set(values.map(iterateeFunc));

  return array.filter(item => !valuesSet.has(iterateeFunc(item)));
};

module.exports = differenceBy;
