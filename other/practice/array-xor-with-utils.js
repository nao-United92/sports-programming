const xorWith = (arrays, comparator) => {
  if (!Array.isArray(arrays) || arrays.length === 0) {
    return [];
  }
  if (typeof comparator !== 'function') {
    throw new Error('Comparator must be a function.');
  }

  const result = [];
  const flatArray = arrays.flat();
  const counts = new Map();

  for (const item of flatArray) {
    let found = false;
    for (const [key] of counts.entries()) {
      if (comparator(item, key)) {
        counts.set(key, counts.get(key) + 1);
        found = true;
        break;
      }
    }
    if (!found) {
      counts.set(item, 1);
    }
  }

  for (const [item, count] of counts.entries()) {
    if (count === 1) {
      result.push(item);
    }
  }

  return result;
};

module.exports = { xorWith };
