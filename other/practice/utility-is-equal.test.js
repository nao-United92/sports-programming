const isEqual = require('./utility-is-equal');

describe('isEqual', () => {
  // Primitive values
  test('should compare numbers correctly', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual(0, -0)).toBe(true); // JavaScript considers 0 and -0 equal
  });

  test('should compare strings correctly', () => {
    expect(isEqual('a', 'a')).toBe(true);
    expect(isEqual('a', 'b')).toBe(false);
  });

  test('should compare booleans correctly', () => {
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(true, false)).toBe(false);
  });

  test('should compare null and undefined correctly', () => {
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
  });

  test('should compare NaN correctly', () => {
    expect(isEqual(NaN, NaN)).toBe(true); // Special case in JavaScript, NaN !== NaN
    expect(isEqual(NaN, 1)).toBe(false);
  });

  // Objects
  test('should compare empty objects', () => {
    expect(isEqual({}, {})).toBe(true);
  });

  test('should compare simple objects', () => {
    expect(isEqual({
      a: 1
    }, {
      a: 1
    })).toBe(true);
    expect(isEqual({
      a: 1
    }, {
      a: 2
    })).toBe(false);
    expect(isEqual({
      a: 1
    }, {
      b: 1
    })).toBe(false);
  });

  test('should compare objects with different number of keys', () => {
    expect(isEqual({
      a: 1
    }, {
      a: 1,
      b: 2
    })).toBe(false);
  });

  test('should compare nested objects', () => {
    expect(isEqual({
      a: {
        b: 1
      }
    }, {
      a: {
        b: 1
      }
    })).toBe(true);
    expect(isEqual({
      a: {
        b: 1
      }
    }, {
      a: {
        b: 2
      }
    })).toBe(false);
  });

  test('should handle objects with null/undefined properties', () => {
    expect(isEqual({
      a: null,
      b: undefined
    }, {
      a: null,
      b: undefined
    })).toBe(true);
  });

  // Arrays
  test('should compare empty arrays', () => {
    expect(isEqual([], [])).toBe(true);
  });

  test('should compare simple arrays', () => {
    expect(isEqual([1, 2], [1, 2])).toBe(true);
    expect(isEqual([1, 2], [2, 1])).toBe(false);
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  test('should compare nested arrays', () => {
    expect(isEqual([1, [2, 3]], [1, [2, 3]])).toBe(true);
    expect(isEqual([1, [2, 3]], [1, [3, 2]])).toBe(false);
  });

  test('should compare mixed arrays and objects', () => {
    expect(isEqual([1, {
      a: 2
    }], [1, {
      a: 2
    }])).toBe(true);
    expect(isEqual([1, {
      a: 2
    }], [1, {
      a: 3
    }])).toBe(false);
  });

  // Dates
  test('should compare Date objects', () => {
    const d1 = new Date('2023-01-01');
    const d2 = new Date('2023-01-01');
    const d3 = new Date('2023-01-02');
    expect(isEqual(d1, d2)).toBe(true);
    expect(isEqual(d1, d3)).toBe(false);
    expect(isEqual(d1, '2023-01-01')).toBe(false); // Different types
  });

  // Regular Expressions
  test('should compare RegExp objects', () => {
    const r1 = /abc/g;
    const r2 = /abc/g;
    const r3 = /xyz/i;
    expect(isEqual(r1, r2)).toBe(true);
    expect(isEqual(r1, r3)).toBe(false);
    expect(isEqual(r1, '/abc/g')).toBe(false); // Different types
  });

  // Functions (by reference)
  test('should compare functions by reference', () => {
    const func1 = () => {};
    const func2 = () => {};
    expect(isEqual(func1, func1)).toBe(true);
    expect(isEqual(func1, func2)).toBe(false);
  });

  // Other types
  test('should return false for different types', () => {
    expect(isEqual(1, '1')).toBe(false);
    expect(isEqual({}, [])).toBe(false);
  });

  // Circular references - my current implementation doesn't handle this explicitly for deep structures
  // It relies on value === other for the object itself, but not for its nested properties.
  // This test will likely fail with a stack overflow if not handled by the isEqual implementation,
  // or return false if the default case is hit before a stack overflow.
  test('should handle circular references (basic check)', () => {
    const obj1 = {};
    const obj2 = {};
    obj1.a = obj1;
    obj2.a = obj2;
    expect(isEqual(obj1, obj2)).toBe(true); // Expected to pass if they are same reference or handled
  });
});
