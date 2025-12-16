const sortBy = (arr, iteratees) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  const normalizedIteratees = Array.isArray(iteratees) ? iteratees : [iteratees];

  return [...arr].sort((a, b) => {
    for (const iteratee of normalizedIteratees) {
      let valA, valB;

      if (typeof iteratee === 'function') {
        valA = iteratee(a);
        valB = iteratee(b);
      } else if (typeof iteratee === 'string') {
        valA = a[iteratee];
        valB = b[iteratee];
      } else {
        valA = a;
        valB = b;
      }

      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }
    }
    return 0;
  });
};

module.exports = sortBy;
