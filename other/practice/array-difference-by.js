const arrayDifferenceBy = (arr1, arr2, iteratee) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Expected both arguments to be arrays.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the third argument (iteratee).');
  }

  const mappedArr2 = new Set(arr2.map(iteratee));
  return arr1.filter(item => !mappedArr2.has(iteratee(item)));
};

export default arrayDifferenceBy;
