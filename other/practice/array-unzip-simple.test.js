import { unzip } from './array-unzip-simple';

describe('unzip', () => {
  test('should unzip an array of grouped elements', () => {
    const zipped = [['a', 1], ['b', 2]];
    const result = unzip(zipped);
    expect(result).toEqual([['a', 'b'], [1, 2]]);
  });

  test('should handle arrays of different lengths', () => {
    const zipped = [['a', 1, true], ['b', 2]];
    const result = unzip(zipped);
    expect(result).toEqual([['a', 'b'], [1, 2], [true, undefined]]);
  });

  test('should return an empty array for empty input', () => {
    expect(unzip([])).toEqual([]);
  });
});
