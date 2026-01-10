const { isDeepEqual } = require('./array-deep-comparator.js');

describe('isDeepEqual', () => {
  // --- Primitive comparisons ---
  test('should return true for two identical arrays of primitives', () => {
    expect(isDeepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('should return false for two different arrays of primitives', () => {
    expect(isDeepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  test('should return false for arrays with different lengths', () => {
    expect(isDeepEqual([1, 2, 3], [1, 2])).toBe(false);
  });

  test('should return true for two empty arrays', () => {
    expect(isDeepEqual([], [])).toBe(true);
  });

  // --- Nested Array comparisons ---
  test('should return true for deeply equal nested arrays', () => {
    expect(isDeepEqual([1, [2, 3], 4], [1, [2, 3], 4])).toBe(true);
  });

  test('should return false for deeply different nested arrays', () => {
    expect(isDeepEqual([1, [2, 3], 4], [1, [2, 4], 4])).toBe(false);
  });

  test('should return false for nested arrays with different lengths', () => {
    expect(isDeepEqual([1, [2, 3], 4], [1, [2], 4])).toBe(false);
  });

  // --- Object comparisons (shallow as per implementation note) ---
  test('should return true for arrays with shallowly equal objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(isDeepEqual([obj1], [obj2])).toBe(true);
  });

  test('should return false for arrays with shallowly different objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    expect(isDeepEqual([obj1], [obj2])).toBe(false);
  });

  test('should return false for arrays with objects having different keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, c: 2 };
    expect(isDeepEqual([obj1], [obj2])).toBe(false);
  });

  test('should return false for arrays with objects having different number of keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    expect(isDeepEqual([obj1], [obj2])).toBe(false);
  });

  // --- Mixed comparisons ---
  test('should return true for arrays with mixed deeply equal content', () => {
    const data1 = [1, 'hello', true, [10, 20], { x: 1, y: 'a' }];
    const data2 = [1, 'hello', true, [10, 20], { x: 1, y: 'a' }];
    expect(isDeepEqual(data1, data2)).toBe(true);
  });

  test('should return false for arrays with mixed deeply different content', () => {
    const data1 = [1, 'hello', true, [10, 20], { x: 1, y: 'a' }];
    const data2 = [1, 'hello', true, [10, 20], { x: 1, y: 'b' }];
    expect(isDeepEqual(data1, data2)).toBe(false);
  });

  // --- Type checks ---
  test('should throw an error if the first argument is not an array', () => {
    expect(() => isDeepEqual(null, [])).toThrow('Both arguments must be arrays.');
    expect(() => isDeepEqual({}, [])).toThrow('Both arguments must be arrays.');
  });

  test('should throw an error if the second argument is not an array', () => {
    expect(() => isDeepEqual([], null)).toThrow('Both arguments must be arrays.');
    expect(() => isDeepEqual([], {})).toThrow('Both arguments must be arrays.');
  });

  test('should return false for different types at the same position', () => {
    expect(isDeepEqual([1, 2], [1, '2'])).toBe(false);
    expect(isDeepEqual([1, {}], [1, []])).toBe(false);
  });
});
