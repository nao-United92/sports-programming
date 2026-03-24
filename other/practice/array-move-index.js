function moveIndex(array, from, to) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  const result = [...array];
  if (from < 0 || from >= array.length || to < 0 || to >= array.length) return result;
  const [removed] = result.splice(from, 1);
  result.splice(to, 0, removed);
  return result;
}
module.exports = moveIndex;
