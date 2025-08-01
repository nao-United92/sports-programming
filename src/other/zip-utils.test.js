
import { zip, unzip } from './zip-utils.js';

describe('zip', () => {
  test('should zip together arrays of the same length', () => {
    const result = zip(['a', 'b'], [1, 2], [true, false]);
    expect(result).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  test('should handle arrays of different lengths', () => {
    const result = zip(['a', 'b'], [1, 2, 3], [true]);
    expect(result).toEqual([['a', 1, true], ['b', 2, undefined], [undefined, 3, undefined]]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  test('should handle empty arrays as input', () => {
    const result = zip(['a', 'b'], [], [1, 2]);
    expect(result).toEqual([['a', undefined, 1], ['b', undefined, 2]]);
  });

  test('should handle non-array inputs gracefully', () => {
    const result = zip(['a', 'b'], null, [1, 2]);
    expect(result).toEqual([['a', undefined, 1], ['b', undefined, 2]]);
  });
});

describe('unzip', () => {
  test('should unzip an array of grouped elements', () => {
    const zipped = [['a', 1, true], ['b', 2, false]];
    const result = unzip(zipped);
    expect(result).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  test('should handle unevenly grouped elements', () => {
    const zipped = [['a', 1], ['b']];
    const result = unzip(zipped);
    expect(result).toEqual([['a', 'b'], [1, undefined]]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(unzip([])).toEqual([]);
  });

  test('should return an empty array for non-array input', () => {
    expect(unzip(null)).toEqual([]);
    expect(unzip(undefined)).toEqual([]);
  });

  test('should be the inverse of zip', () => {
    const arrays = [['a', 'b'], [1, 2, 3], [true]];
    const zipped = zip(...arrays);
    const unzipped = unzip(zipped);
    // Note: unzip will produce undefineds for missing values, so it's not a perfect inverse for uneven arrays.
    // We need to compare it to the zipped and then unzipped version.
    const rezipped = zip(...unzipped);
    expect(zipped).toEqual(rezipped);
  });
});
