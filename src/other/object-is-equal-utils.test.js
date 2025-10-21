const { isEqual } = require('./object-is-equal-utils');

describe('isEqual', () => {
  // Primitive values
  it('should compare primitive values correctly', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual(0, null)).toBe(false);
    expect(isEqual(NaN, NaN)).toBe(true);
  });

  // Objects
  it('should compare simple objects correctly', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, c: 2 })).toBe(false);
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it('should compare nested objects correctly', () => {
    const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
    const obj2 = { a: 1, b: { c: 2, d: { e: 3 } } };
    const obj3 = { a: 1, b: { c: 2, d: { e: 4 } } };
    expect(isEqual(obj1, obj2)).toBe(true);
    expect(isEqual(obj1, obj3)).toBe(false);
  });

  // Arrays
  it('should compare simple arrays correctly', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  it('should compare nested arrays and arrays in objects correctly', () => {
    const arr1 = [1, [2, 3], { a: 4 }];
    const arr2 = [1, [2, 3], { a: 4 }];
    const arr3 = [1, [2, 3], { a: 5 }];
    expect(isEqual(arr1, arr2)).toBe(true);
    expect(isEqual(arr1, arr3)).toBe(false);

    const obj1 = { a: [1, 2], b: 3 };
    const obj2 = { a: [1, 2], b: 3 };
    const obj3 = { a: [1, 3], b: 3 };
    expect(isEqual(obj1, obj2)).toBe(true);
    expect(isEqual(obj1, obj3)).toBe(false);
  });

  // Mixed types
  it('should return false for different types', () => {
    expect(isEqual({}, [])).toBe(false);
    expect(isEqual(1, {})).toBe(false);
    expect(isEqual('1', 1)).toBe(false);
  });

  // Edge cases
  it('should handle empty objects and arrays', () => {
    expect(isEqual({}, {})).toBe(true);
    expect(isEqual([], [])).toBe(true);
    expect(isEqual({}, [])).toBe(false);
  });

  it('should handle objects with different constructors but same structure', () => {
    function CustomObject(a) { this.a = a; }
    const obj1 = new CustomObject(1);
    const obj2 = { a: 1 };
    expect(isEqual(obj1, obj2)).toBe(true); // Current implementation compares structure, not constructor
  });

  it('should handle dates', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    const date3 = new Date('2023-01-02');
    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });

  it('should handle regex', () => {
    const regex1 = /abc/g;
    const regex2 = /abc/g;
    const regex3 = /def/g;
    expect(isEqual(regex1, regex2)).toBe(true);
    expect(isEqual(regex1, regex3)).toBe(false);
  });
});