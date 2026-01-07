const { sortedLastIndexBy } = require('./array-sorted-last-index-by-utils');

describe('sortedLastIndexBy', () => {
  const array = [{ x: 4 }, { x: 5 }, { x: 5 }, { x: 7 }];

  test('should find the last sorted index using an iteratee function', () => {
    const result = sortedLastIndexBy(array, { x: 5 }, o => o.x);
    expect(result).toBe(3);
  });
  
  test('should find the last sorted index using a property name iteratee', () => {
    const result = sortedLastIndexBy(array, { x: 5 }, 'x');
    expect(result).toBe(3);
  });

  test('should return the correct index if value is smaller than all elements', () => {
    const result = sortedLastIndexBy(array, { x: 3 }, 'x');
    expect(result).toBe(0);
  });

  test('should return the array length if value is larger than all elements', () => {
    const result = sortedLastIndexBy(array, { x: 8 }, 'x');
    expect(result).toBe(4);
  });

  test('should handle an empty array', () => {
    const result = sortedLastIndexBy([], { x: 5 }, o => o.x);
    expect(result).toBe(0);
  });

  test('should handle non-array input', () => {
    const result = sortedLastIndexBy(null, { x: 5 }, o => o.x);
    expect(result).toBe(0);
  });

  test('should work with different data types', () => {
    const strArray = [{ val: 'a' }, { val: 'b' }, { val: 'b' }, { val: 'c' }];
    const result = sortedLastIndexBy(strArray, { val: 'b' }, 'val');
    expect(result).toBe(3);
  });
});
