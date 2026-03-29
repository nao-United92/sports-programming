import { zip } from './array-zip.js';
describe('zip', () => {
  it('should zip two arrays', () => {
    expect(zip(['a', 'b'], [1, 2])).toEqual([['a', 1], [['b', 2]]]);
  });
});
