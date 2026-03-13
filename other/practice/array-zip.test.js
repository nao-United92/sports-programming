import { zip } from './array-zip.js';

describe('zip', () => {
  it('zips multiple arrays', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  it('handles arrays of different lengths', () => {
    expect(zip(['a'], [1, 2], [true, false, 'extra'])).toEqual([
      ['a', 1, true],
      [undefined, 2, false],
      [undefined, undefined, 'extra'],
    ]);
  });

  it('handles empty input', () => {
    expect(zip()).toEqual([]);
  });
});
