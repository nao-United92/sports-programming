const intersectionBy = (...arrays) => {
  const iteratee = typeof arrays[arrays.length - 1] === 'function' ? arrays.pop() : item => item;
  
  if (arrays.length < 2) {
    return arrays.length === 1 ? arrays[0] : [];
  }

  const [firstArr, ...restArrs] = arrays;
  const result = [];
  const mappedFirstArr = firstArr.map(iteratee);

  for (let i = 0; i < firstArr.length; i++) {
    const item = firstArr[i];
    const mappedItem = mappedFirstArr[i];

    const isPresentInAll = restArrs.every(arr => 
      arr.some(v => iteratee(v) === mappedItem)
    );

    if (isPresentInAll) {
      result.push(item);
    }
  }

  // Ensure uniqueness in the result
  const seen = new Set();
  return result.filter(item => {
    const mapped = iteratee(item);
    if (seen.has(mapped)) {
      return false;
    } else {
      seen.add(mapped);
      return true;
    }
  });
};

module.exports = intersectionBy;
