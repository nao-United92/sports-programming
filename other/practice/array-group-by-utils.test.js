import groupBy from './array-group-by-utils';

describe('groupBy', () => {
  // Test case 1: Basic grouping by a property
  test('should group an array of objects by a specified property', () => {
    const people = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 30 },
      { name: 'David', age: 25 },
    ];
    const result = groupBy(people, person => person.age);
    expect(result).toEqual({
      '30': [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }],
      '25': [{ name: 'Bob', age: 25 }, { name: 'David', age: 25 }],
    });
  });

  // Test case 2: Grouping by a computed value
  test('should group an array by a computed value', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = groupBy(numbers, num => (num % 2 === 0 ? 'even' : 'odd'));
    expect(result).toEqual({
      'odd': [1, 3, 5],
      'even': [2, 4, 6],
    });
  });

  // Test case 3: Empty array input
  test('should return an empty object for an empty array', () => {
    const result = groupBy([], item => item);
    expect(result).toEqual({});
  });

  // Test case 4: Array with single element
  test('should group a single-element array correctly', () => {
    const data = [{ id: 1, value: 'test' }];
    const result = groupBy(data, item => item.id);
    expect(result).toEqual({
      '1': [{ id: 1, value: 'test' }],
    });
  });

  // Test case 5: Callback returning undefined/null keys (should be skipped)
  test('should skip items if the callback returns undefined or null', () => {
    const items = [
      { type: 'A', value: 1 },
      { type: 'B', value: 2 },
      { type: null, value: 3 },
      { type: 'A', value: 4 },
      { type: undefined, value: 5 },
    ];
    const result = groupBy(items, item => item.type);
    expect(result).toEqual({
      'A': [{ type: 'A', value: 1 }, { type: 'A', value: 4 }],
      'B': [{ type: 'B', value: 2 }],
    });
  });

  // Test case 6: Grouping by string keys
  test('should handle string keys correctly', () => {
    const words = ['apple', 'banana', 'apricot', 'berry'];
    const result = groupBy(words, word => word[0]);
    expect(result).toEqual({
      'a': ['apple', 'apricot'],
      'b': ['banana', 'berry'],
    });
  });

  // Test case 7: Grouping by number keys
  test('should handle number keys correctly', () => {
    const products = [{ id: 101, name: 'A' }, { id: 102, name: 'B' }, { id: 101, name: 'C' }];
    const result = groupBy(products, p => p.id);
    expect(result).toEqual({
      '101': [{ id: 101, name: 'A' }, { id: 101, name: 'C' }],
      '102': [{ id: 102, name: 'B' }],
    });
  });

  // Test case 8: Invalid input - non-array
  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => groupBy(null, item => item)).toThrow(TypeError);
    expect(() => groupBy(undefined, item => item)).toThrow(TypeError);
    expect(() => groupBy({}, item => item)).toThrow(TypeError);
    expect(() => groupBy('string', item => item)).toThrow(TypeError);
  });

  // Test case 9: Invalid input - non-function callback
  test('should throw TypeError if the second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => groupBy(arr, 'not-a-function')).toThrow(TypeError);
    expect(() => groupBy(arr, null)).toThrow(TypeError);
    expect(() => groupBy(arr, undefined)).toThrow(TypeError);
  });
});