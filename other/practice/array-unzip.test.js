import { unzip } from './array-unzip.js';

describe('unzip', () => {
  it('unzips an array of grouped elements', () => {
    expect(unzip([['a', 1, true], ['b', 2, false]])).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  it('handles arrays of different lengths', () => {
    expect(unzip([['a', 1, true], ['b', 2]])).toEqual([['a', 'b'], [1, 2], [true]]);
  });

  it('handles empty input', () => {
    expect(unzip([])).toEqual([]);
  });
});
