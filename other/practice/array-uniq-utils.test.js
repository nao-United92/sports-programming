import { uniq } from './array-uniq-utils.js';

describe('uniq', () => {
  it('should return an array with unique values', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(uniq(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with no duplicates', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(uniq(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    expect(uniq([])).toEqual([]);
  });

  it('should handle an array with various data types', () => {
    const arr = [1, 'hello', 1, 'world', 'hello'];
    expect(uniq(arr)).toEqual([1, 'hello', 'world']);
  });
});