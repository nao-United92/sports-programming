import { partitionBy } from './array-partition-by.js';
describe('partitionBy', () => {
  it('should partition array', () => {
    expect(partitionBy([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([[2, 4], [1, 3]]);
  });
});
