import { unzip } from './array-unzip-utils.js';

describe('unzip', () => {
  test('should unzip an array of arrays', () => {
    expect(unzip([['a', 1, true], ['b', 2, false]])).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  test('should handle arrays with different lengths', () => {
    expect(unzip([['a', 1], ['b', 2, true]])).toEqual([['a', 'b'], [1, 2], [true]]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(unzip([])).toEqual([]);
  });
});