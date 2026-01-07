const unionWith = (...arrays) => {
  const comparator = arrays.pop();
  if (typeof comparator !== 'function') {
    throw new Error('The last argument must be a comparator function.');
  }

  const result = [];
  const flatArray = arrays.flat();

  for (const item of flatArray) {
    let found = false;
    for (const resItem of result) {
      if (comparator(item, resItem)) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(item);
    }
  }

  return result;
};

module.exports = { unionWith };
