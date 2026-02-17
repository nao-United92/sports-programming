const arrayIntersection = (...arrays) => {
  if (arrays.some(arr => !Array.isArray(arr))) {
    throw new TypeError('Expected all arguments to be arrays.');
  }
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return [...new Set(arrays[0])];
  }

  const referenceSet = new Set(arrays[0]);
  const intersection = new Set();

  for (const item of referenceSet) {
    let isInAll = true;
    for (let i = 1; i < arrays.length; i++) {
      if (!arrays[i].includes(item)) {
        isInAll = false;
        break;
      }
    }
    if (isInAll) {
      intersection.add(item);
    }
  }

  return Array.from(intersection);
};

export default arrayIntersection;
