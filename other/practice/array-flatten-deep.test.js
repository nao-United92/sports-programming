import { flattenDeep } from './array-flatten-deep.js';
describe('flattenDeep', () => {
  it('should deeply flatten an array', () => {
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });
});
