
import { unzip } from './array-unzip-utils.js';

describe('unzip', () => {
  it('should unzip a simple array of arrays', () => {
    const zipped = [[1, 'a'], [2, 'b'], [3, 'c']];
    const expected = [[1, 2, 3], ['a', 'b', 'c']];
    expect(unzip(zipped)).toEqual(expected);
  });

  it('should handle empty input array', () => {
    expect(unzip([])).toEqual([]);
  });

  it('should handle inner arrays of different lengths, padding with undefined', () => {
    const zipped = [[1, 'a', true], [2, 'b'], [3, 'c', false, 4]];
    const expected = [[1, 2, 3], ['a', 'b', 'c'], [true, undefined, false], [undefined, undefined, 4]];
    expect(unzip(zipped)).toEqual(expected);
  });

  it('should handle empty inner arrays', () => {
    const zipped = [[], [], []];
    expect(unzip(zipped)).toEqual([]);
  });

  it('should handle non-array elements in the outer array', () => {
    const zipped = [[1, 'a'], null, [2, 'b']];
    const expected = [[1, 2], ['a', 'b']];
    expect(unzip(zipped)).toEqual(expected);
  });

  it('should handle single inner array', () => {
    const zipped = [[1, 2, 3]];
    const expected = [[1], [2], [3]];
    expect(unzip(zipped)).toEqual(expected);
  });

  it('should handle inner arrays with null or undefined values', () => {
    const zipped = [[1, null], [2, undefined], [3, 'c']];
    const expected = [[1, 2, 3], [null, undefined, 'c']];
    expect(unzip(zipped)).toEqual(expected);
  });
});
