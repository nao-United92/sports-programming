function flatMapSkip(array, mapper) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  return array.reduce((acc, item, index) => {
    const mapped = mapper(item, index, array);
    if (mapped == null) return acc;
    if (Array.isArray(mapped)) {
      acc.push(...mapped);
    } else {
      acc.push(mapped);
    }
    return acc;
  }, []);
}
module.exports = flatMapSkip;
