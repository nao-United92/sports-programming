import { unique } from './unique-utils.js';

describe('unique', () => {
  test('should return an array with unique values', () => {
    expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should return the same array if all values are unique', () => {
    expect(unique([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle an empty array', () => {
    expect(unique([])).toEqual([]);
  });
});