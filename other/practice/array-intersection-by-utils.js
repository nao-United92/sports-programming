const intersectionBy = (...arrays) => {
  const iteratee = arrays.pop();
  const iterateeFunc = typeof iteratee === 'function'
    ? iteratee
    : (item) => item[iteratee];

  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return [...arrays[0]];
  }
  
  const [firstArr, ...restArrs] = arrays;
  const sets = restArrs.map(arr => new Set(arr.map(iterateeFunc)));

  return firstArr.filter(item => {
    const mappedItem = iterateeFunc(item);
    return sets.every(set => set.has(mappedItem));
  });
};

module.exports = { intersectionBy };