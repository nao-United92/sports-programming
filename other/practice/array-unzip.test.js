import { unzip } from './array-unzip';

describe('unzip', () => {
  test('unzips an array of grouped elements', () => {
    expect(unzip([['a', 1, true], ['b', 2, false]])).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  test('handles an empty array', () => {
    expect(unzip([])).toEqual([]);
  });
});
