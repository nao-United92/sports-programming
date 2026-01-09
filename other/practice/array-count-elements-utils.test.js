import { countElements } from './array-count-elements-utils.js';

describe('countElements', () => {
  test('should count the occurrences of each element in an array', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    expect(countElements(arr)).toEqual({ '1': 1, '2': 2, '3': 3 });
  });

  test('should handle an empty array', () => {
    expect(countElements([])).toEqual({});
  });

  test('should handle arrays with different data types', () => {
    const arr = ['a', 'b', 'a', null, null, undefined];
    expect(countElements(arr)).toEqual({ 'a': 2, 'b': 1, 'null': 2, 'undefined': 1 });
  });

  test('should return an empty object for non-array inputs', () => {
    expect(countElements(null)).toEqual({});
    expect(countElements('string')).toEqual({});
  });
});
