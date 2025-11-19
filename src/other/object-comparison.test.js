import { deepEqual } from './object-comparison';

describe('deepEqual', () => {
  // Test cases for primitive values
  test('should correctly compare primitive values', () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual('hello', 'hello')).toBe(true);
    expect(deepEqual('hello', 'world')).toBe(false);
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(true, false)).toBe(false);
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(null, undefined)).toBe(false);
    expect(deepEqual(undefined, undefined)).toBe(true);
    expect(deepEqual(0, -0)).toBe(true); // JavaScript treats 0 and -0 as equal
  });

  // Test cases for NaN
  test('should correctly compare NaN values', () => {
    expect(deepEqual(NaN, NaN)).toBe(true);
    expect(deepEqual(NaN, 1)).toBe(false);
  });

  // Test cases for arrays
  test('should correctly compare arrays', () => {
    expect(deepEqual([], [])).toBe(true);
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false);
    expect(deepEqual([1, 2, [3, 4]], [1, 2, [3, 4]])).toBe(true);
    expect(deepEqual([1, 2, [3, 4]], [1, 2, [3, 5]])).toBe(false);
    expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  // Test cases for objects
  test('should correctly compare objects', () => {
    expect(deepEqual({}, {})).toBe(true);
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true); // Order of keys doesn't matter
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(deepEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })).toBe(true);
    expect(deepEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 4 } })).toBe(false);
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  // Test cases for mixed types
  test('should correctly compare mixed types', () => {
    expect(deepEqual(1, '1')).toBe(false);
    expect(deepEqual([], {})).toBe(false);
    expect(deepEqual({ a: 1 }, [1])).toBe(false);
  });

  // Test cases for complex nested structures
  test('should handle complex nested structures', () => {
    const obj1 = {
      name: 'Test',
      details: {
        age: 30,
        address: {
          street: '123 Main St',
          zip: '12345'
        },
        hobbies: ['reading', 'coding', { sport: 'tennis' }]
      },
      isActive: true
    };

    const obj2 = {
      name: 'Test',
      details: {
        age: 30,
        address: {
          street: '123 Main St',
          zip: '12345'
        },
        hobbies: ['reading', 'coding', { sport: 'tennis' }]
      },
      isActive: true
    };

    const obj3 = {
      name: 'Test',
      details: {
        age: 30,
        address: {
          street: '123 Main St',
          zip: '12345'
        },
        hobbies: ['reading', 'coding', { sport: 'golf' }] // Different hobby
      },
      isActive: true
    };

    expect(deepEqual(obj1, obj2)).toBe(true);
    expect(deepEqual(obj1, obj3)).toBe(false);
  });

  // Test cases for functions and symbols (should return false as they are not deeply comparable by value)
  test('should return false for functions and symbols', () => {
    const func1 = () => {};
    const func2 = () => {};
    const sym1 = Symbol('a');
    const sym2 = Symbol('a');

    expect(deepEqual(func1, func1)).toBe(true); // Same function reference
    expect(deepEqual(func1, func2)).toBe(false); // Different function references
    expect(deepEqual(sym1, sym1)).toBe(true); // Same symbol reference
    expect(deepEqual(sym1, sym2)).toBe(false); // Different symbol references
  });
});
