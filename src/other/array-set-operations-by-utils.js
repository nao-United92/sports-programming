export const intersectionBy = (array, other, iteratee) => {
  const iteratedOther = new Set(other.map(iteratee));
  return array.filter(item => iteratedOther.has(iteratee(item)));
};

export const unionBy = (...arraysAndIteratee) => {
  const iteratee = arraysAndIteratee.pop();
  const allItems = [].concat(...arraysAndIteratee);
  const seen = new Set();
  const result = [];

  for (const item of allItems) {
    const computed = iteratee(item);
    if (!seen.has(computed)) {
      seen.add(computed);
      result.push(item);
    }
  }
  return result;
};

export const differenceBy = (array, other, iteratee) => {
  const iteratedOther = new Set(other.map(iteratee));
  return array.filter(item => !iteratedOther.has(iteratee(item)));
};
