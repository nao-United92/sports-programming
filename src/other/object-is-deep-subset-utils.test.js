const { isDeepSubset } = require('./object-is-deep-subset-utils.js');

describe('isDeepSubset', () => {
  test('should return true for identical objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    expect(isDeepSubset(obj, obj)).toBe(true);
  });

  test('should return true if subset is a deep subset of superset', () => {
    const superset = { a: 1, b: { c: 2, d: [3, { e: 4 }] }, f: 'g' };
    const subset = { a: 1, b: { c: 2, d: [3, { e: 4 }] } };
    expect(isDeepSubset(superset, subset)).toBe(true);
  });

  test('should return false if subset has extra properties', () => {
    const superset = { a: 1, b: { c: 2 } };
    const subset = { a: 1, b: { c: 2, d: 3 } };
    expect(isDeepSubset(superset, subset)).toBe(false);
  });

  test('should return false if subset has different values', () => {
    const superset = { a: 1, b: { c: 2 } };
    const subset = { a: 1, b: { c: 3 } };
    expect(isDeepSubset(superset, subset)).toBe(false);
  });

  test('should return true for identical arrays', () => {
    const arr = [1, { a: 2 }, [3, 4]];
    expect(isDeepSubset(arr, arr)).toBe(true);
  });

  test('should return true if subset array is a deep subset of superset array', () => {
    const superset = [1, { a: 2, b: 3 }, [4, 5, 6]];
    const subset = [{ a: 2, b: 3 }, [4, 5]];
    expect(isDeepSubset(superset, subset)).toBe(true);
  });

  test('should return false if subset array has extra elements not in superset', () => {
    const superset = [1, 2, 3];
    const subset = [1, 2, 4];
    expect(isDeepSubset(superset, subset)).toBe(false);
  });

  test('should return false if subset array has different values', () => {
    const superset = [1, { a: 2 }];
    const subset = [1, { a: 3 }];
    expect(isDeepSubset(superset, subset)).toBe(false);
  });

  test('should handle primitive values', () => {
    expect(isDeepSubset(1, 1)).toBe(true);
    expect(isDeepSubset(1, 2)).toBe(false);
    expect(isDeepSubset('a', 'a')).toBe(true);
    expect(isDeepSubset('a', 'b')).toBe(false);
    expect(isDeepSubset(true, true)).toBe(true);
    expect(isDeepSubset(true, false)).toBe(false);
  });

  test('should return false if types are different', () => {
    expect(isDeepSubset({}, [])).toBe(false);
    expect(isDeepSubset(1, '1')).toBe(false);
  });

  test('should handle null and undefined', () => {
    expect(isDeepSubset(null, null)).toBe(true);
    expect(isDeepSubset(undefined, undefined)).toBe(true);
    expect(isDeepSubset({ a: null }, { a: null })).toBe(true);
    expect(isDeepSubset({ a: undefined }, { a: undefined })).toBe(true);
    expect(isDeepSubset({ a: 1 }, { a: null })).toBe(false);
  });

  test('should handle circular references', () => {
    const obj1 = {};
    obj1.a = obj1;
    const obj2 = {};
    obj2.a = obj2;
    expect(isDeepSubset(obj1, obj2)).toBe(true);

    const obj3 = { x: {} };
    obj3.x.y = obj3;
    const obj4 = { x: {} };
    obj4.x.y = obj4;
    expect(isDeepSubset(obj3, obj4)).toBe(true);

    const obj5 = { a: 1 };
    obj5.b = obj5;
    const obj6 = { a: 1 };
    obj6.b = obj6;
    expect(isDeepSubset(obj5, obj6)).toBe(true);
  });
});
