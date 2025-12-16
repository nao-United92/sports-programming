const uniqWith = (arr, comparator) => {
  if (!Array.isArray(arr) || typeof comparator !== 'function') {
    return [];
  }

  const result = [];
  for (const item of arr) {
    if (result.findIndex(resItem => comparator(item, resItem)) === -1) {
      result.push(item);
    }
  }

  return result;
};

module.exports = uniqWith;
