
const reduceRight = (array, iteratee, accumulator) => {
  const length = array == null ? 0 : array.length;
  let index = length - 1;
  let result = accumulator;

  if (accumulator === undefined && length > 0) {
    result = array[index--];
  }

  while (index >= 0) {
    result = iteratee(result, array[index], index, array);
    index--;
  }
  return result;
};

module.exports = reduceRight;
