const unique = require('./array-unique');

describe('unique', () => {
  test('should return an array with only unique values', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle arrays with mixed data types', () => {
    const arr = [1, 'a', 2, 'a', 3, null, null, undefined, undefined, { a: 1 }, { a: 1 }];
    const result = unique(arr);
    expect(result).toHaveLength(8); // 1, 'a', 2, 3, null, undefined, { a: 1}, { a: 1 }
    expect(result).toEqual([1, 'a', 2, 3, null, undefined, { a: 1 }, { a: 1 }]);
  });
  
  test('should handle arrays with mixed data types including objects (reference equality)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const arr = [1, obj1, 2, obj1, 3, obj2, obj2];
    expect(unique(arr)).toEqual([1, obj1, 2, 3, obj2]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(unique([])).toEqual([]);
  });

  test('should return the same array if all values are already unique', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(unique(arr)).toEqual(arr);
  });
});