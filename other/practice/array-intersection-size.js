function intersectionSize(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Inputs must be arrays');
  }
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  let count = 0;
  for (const item of set2) {
    if (set1.has(item)) count++;
  }
  return count;
}
module.exports = intersectionSize;
