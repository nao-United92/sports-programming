const mode = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (arr.length === 0) {
    return [];
  }

  const counts = new Map();
  let maxCount = 0;

  for (const item of arr) {
    const stringifiedItem = typeof item === 'object' && item !== null ? JSON.stringify(item) : item;
    const currentCount = (counts.get(stringifiedItem) || { count: 0 }).count + 1;
    counts.set(stringifiedItem, { value: item, count: currentCount });
    if (currentCount > maxCount) {
      maxCount = currentCount;
    }
  }

  const result = [];
  for (const [stringifiedItem, { value, count }] of counts.entries()) {
    if (count === maxCount) {
      result.push(value);
    }
  }

  return result;
};

module.exports = { mode };
