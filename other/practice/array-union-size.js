function unionSize(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Inputs must be arrays');
  }
  const combined = new Set([...array1, ...array2]);
  return combined.size;
}
module.exports = unionSize;
