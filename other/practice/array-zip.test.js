import { zip } from './array-zip';

describe('zip', () => {
  test('zips multiple arrays together', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  test('handles arrays of different lengths', () => {
    expect(zip(['a'], [1, 2])).toEqual([['a', 1], [undefined, 2]]);
  });
});
