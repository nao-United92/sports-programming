function groupByMap(array, keySelector) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  const result = new Map();
  for (const item of array) {
    const key = keySelector(item);
    if (!result.has(key)) {
      result.set(key, []);
    }
    result.get(key).push(item);
  }
  return result;
}

module.exports = groupByMap;
