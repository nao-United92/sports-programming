import { unzip } from './array-unzip-utils.js';

describe('unzip', () => {
  it('should unzip an array of grouped elements into separate arrays', () => {
    const zipped = [
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true]
    ];
    expect(unzip(zipped)).toEqual([
      [1, 2, 3],
      ['a', 'b', 'c'],
      [true, false, true]
    ]);
  });

  it('should handle arrays with different lengths, filling with undefined', () => {
    const zipped = [
      [1, 'a'],
      [2, 'b'],
      [undefined, 'c']
    ];
    expect(unzip(zipped)).toEqual([
      [1, 2, undefined],
      ['a', 'b', 'c']
    ]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(unzip([])).toEqual([]);
  });

  it('should return an empty array for an input array containing empty arrays', () => {
    expect(unzip([[], [], []])).toEqual([]);
  });

  it('should handle single inner array', () => {
    const zipped = [[1], [2], [3]];
    expect(unzip(zipped)).toEqual([[1, 2, 3]]);
  });

  it('should handle non-array input by returning empty array', () => {
    expect(unzip(null)).toEqual([]);
    expect(unzip(undefined)).toEqual([]);
    expect(unzip("string")).toEqual([]);
    expect(unzip({})).toEqual([]);
  });
});
