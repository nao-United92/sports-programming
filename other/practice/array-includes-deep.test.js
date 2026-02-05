const { includesDeep, isEqualDeep } = require('./array-includes-deep');

describe('isEqualDeep', () => {
  it('should correctly compare primitive values', () => {
    expect(isEqualDeep(1, 1)).toBe(true);
    expect(isEqualDeep(1, 2)).toBe(false);
    expect(isEqualDeep('hello', 'hello')).toBe(true);
    expect(isEqualDeep('hello', 'world')).toBe(false);
    expect(isEqualDeep(true, true)).toBe(true);
    expect(isEqualDeep(true, false)).toBe(false);
    expect(isEqualDeep(null, null)).toBe(true);
    expect(isEqualDeep(null, undefined)).toBe(false);
  });

  it('should correctly compare arrays', () => {
    expect(isEqualDeep([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqualDeep([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isEqualDeep([1, [2, 3]], [1, [2, 3]])).toBe(true);
    expect(isEqualDeep([1, [2, 3]], [1, [2, 4]])).toBe(false);
    expect(isEqualDeep([], [])).toBe(true);
    expect(isEqualDeep([1], [1, 2])).toBe(false);
  });

  it('should correctly compare objects', () => {
    expect(isEqualDeep({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqualDeep({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(isEqualDeep({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })).toBe(true);
    expect(isEqualDeep({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 4 } })).toBe(false);
    expect(isEqualDeep({}, {})).toBe(true);
    expect(isEqualDeep({ a: 1 }, { b: 1 })).toBe(false);
    expect(isEqualDeep({ a: 1, b: undefined }, { a: 1 })).toBe(false); // undefined keys are considered different
  });

  it('should handle mixed types correctly', () => {
    expect(isEqualDeep({ a: 1, b: [2, { c: 3 }] }, { a: 1, b: [2, { c: 3 }] })).toBe(true);
    expect(isEqualDeep({ a: 1, b: [2, { c: 3 }] }, { a: 1, b: [2, { c: 4 }] })).toBe(false);
  });
});

describe('includesDeep', () => {
  const arr = [1, { a: 1, b: [2, 3] }, 'hello', [4, 5]];

  it('should return true if a primitive value is found', () => {
    expect(includesDeep(arr, 1)).toBe(true);
    expect(includesDeep(arr, 'hello')).toBe(true);
  });

  it('should return false if a primitive value is not found', () => {
    expect(includesDeep(arr, 99)).toBe(false);
    expect(includesDeep(arr, 'world')).toBe(false);
  });

  it('should return true if a deeply equal object is found', () => {
    expect(includesDeep(arr, { a: 1, b: [2, 3] })).toBe(true);
  });

  it('should return false if a deeply equal object is not found', () => {
    expect(includesDeep(arr, { a: 1, b: [2, 4] })).toBe(false);
    expect(includesDeep(arr, { a: 1 })).toBe(false);
  });

  it('should return true if a deeply equal array is found', () => {
    expect(includesDeep(arr, [4, 5])).toBe(true);
  });

  it('should return false if a deeply equal array is not found', () => {
    expect(includesDeep(arr, [4, 6])).toBe(false);
  });

  it('should handle empty arrays', () => {
    expect(includesDeep([], 1)).toBe(false);
  });

  it('should throw an error if not given an array as the first argument', () => {
    expect(() => includesDeep('not an array', 1)).toThrow(TypeError);
    expect(() => includesDeep(null, 1)).toThrow(TypeError);
  });
});
