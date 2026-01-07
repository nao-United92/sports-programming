const sortedLastIndexBy = (array, value, iteratee) => {
  if (!Array.isArray(array)) {
    return 0;
  }

  const iterateeFunc = typeof iteratee === 'function' 
    ? iteratee 
    : (item) => item[iteratee];

  const iteratedValue = iterateeFunc(value);
  
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const iteratedMid = iterateeFunc(array[mid]);

    if (iteratedMid > iteratedValue) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return high;
};

module.exports = { sortedLastIndexBy };
