import { unique } from './array-unique-utils';

describe('unique', () => {
  test('should return a new array with duplicate values removed', () => {
    expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle arrays with different data types', () => {
    expect(unique([1, 'a', 2, 'a', 1, 'b'])).toEqual([1, 'a', 2, 'b']);
  });

  test('should handle empty arrays', () => {
    expect(unique([])).toEqual([]);
  });

  test('should handle arrays with no duplicates', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle arrays with all duplicate values', () => {
    expect(unique([1, 1, 1, 1])).toEqual([1]);
  });
});
