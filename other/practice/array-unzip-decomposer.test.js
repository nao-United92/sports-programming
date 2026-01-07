import { unzip } from './array-unzip-decomposer.js';

describe('unzip', () => {
  it('should unzip an array of grouped elements', () => {
    const zipped = [['a', 1, true], ['b', 2, false]];
    const result = unzip(zipped);
    expect(result).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  it('should handle arrays of different lengths by padding with undefined', () => {
    const zipped = [['a', 1, true], ['b', 2], ['c']];
    const result = unzip(zipped);
    expect(result).toEqual([['a', 'b', 'c'], [1, 2, undefined], [true, undefined, undefined]]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(unzip([])).toEqual([]);
  });

  it('should handle an array with empty sub-arrays', () => {
    const zipped = [[], ['a'], []];
    const result = unzip(zipped);
    expect(result).toEqual([[undefined, 'a', undefined]]);
  });

  it('should handle a simple case', () => {
    const zipped = [['a'], ['b'], ['c']];
    const result = unzip(zipped);
    expect(result).toEqual([['a', 'b', 'c']]);
  });
});
