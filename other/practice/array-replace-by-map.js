function replaceByMap(array, map) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  return array.map(item => map.has(item) ? map.get(item) : item);
}
module.exports = replaceByMap;
