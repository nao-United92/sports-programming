
const reduceRight = require('./array-reduce-right-simple');

test('reduceRight should reduce from right to left', () => {
  const array = [[0, 1], [2, 3], [4, 5]];
  const flattened = reduceRight(array, (flattened, other) => flattened.concat(other), []);
  expect(flattened).toEqual([4, 5, 2, 3, 0, 1]);
});
