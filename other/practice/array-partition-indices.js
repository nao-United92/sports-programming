function partitionIndices(array, predicate) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  const trueIndices = [];
  const falseIndices = [];
  
  array.forEach((element, index) => {
    if (predicate(element, index, array)) {
      trueIndices.push(index);
    } else {
      falseIndices.push(index);
    }
  });
  
  return [trueIndices, falseIndices];
}
module.exports = partitionIndices;
