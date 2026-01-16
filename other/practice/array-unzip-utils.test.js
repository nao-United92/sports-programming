const arrayUnzip = require('./array-unzip-utils');

describe('arrayUnzip', () => {
  test('should unzip an array of grouped elements correctly', () => {
    const zipped = [[1, 'a'], [2, 'b'], [3, 'c']];
    expect(arrayUnzip(zipped)).toEqual([[1, 2, 3], ['a', 'b', 'c']]);
  });

  test('should handle unzipping multiple arrays', () => {
    const zipped = [[1, 'a', true], [2, 'b', false]];
    expect(arrayUnzip(zipped)).toEqual([[1, 2], ['a', 'b'], [true, false]]);
  });

  test('should handle arrays of different lengths (padding with undefined)', () => {
    const zipped = [[1, 'a'], [2, 'b'], [3, undefined]];
    expect(arrayUnzip(zipped)).toEqual([[1, 2, 3], ['a', 'b', undefined]]);
  });

  test('should handle an empty input array', () => {
    expect(arrayUnzip([])).toEqual([]);
  });

  test('should handle an input array containing empty arrays', () => {
    const zipped = [[], [], []];
    expect(arrayUnzip(zipped)).toEqual([]);
  });

  test('should handle a single element in grouped arrays', () => {
    const zipped = [[1], [2], [3]];
    expect(arrayUnzip(zipped)).toEqual([[1, 2, 3]]);
  });

  test('should throw an error if the main argument is not an array', () => {
    expect(() => arrayUnzip(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnzip(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayUnzip('string')).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if elements within the zipped array are not arrays', () => {
    const zipped = [[1, 'a'], 2, [3, 'c']];
    expect(() => arrayUnzip(zipped)).toThrow('Expected an array of arrays.');
    const zipped2 = [{}, []];
    expect(() => arrayUnzip(zipped2)).toThrow('Expected an array of arrays.');
  });
});
