import { deepMerge, isEmptyObject, deepEqualWithIntersection } from './object-advanced-utils';

describe('deepMerge', () => {
  test('should merge simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test('should overwrite properties with later sources', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should deep merge nested objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });

  test('should handle arrays by concatenating them', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4] };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: [1, 2, 3, 4] });
  });

  test('should handle mixed types, overwriting non-object/array types', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: [3, 4], b: 5 };
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: [3, 4], b: 5 });
  });

  test('should return target if sources are null or not objects', () => {
    const target = { a: 1 };
    expect(deepMerge(target, null, undefined, 123)).toEqual({ a: 1 });
  });

  test('should not modify source objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 } };
    const merged = deepMerge({}, obj1, obj2);
    expect(obj1).toEqual({ a: 1, b: { c: 2 } });
    expect(obj2).toEqual({ b: { d: 3 } });
    expect(merged).toEqual({ a: 1, b: { c: 2, d: 3 } });
  });

  test('should handle multiple source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(deepMerge({}, obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
  });
});

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('should return false for an object with inherited properties but no own properties', () => {
    function Proto() {}
    Proto.prototype.a = 1;
    const obj = new Proto();
    expect(isEmptyObject(obj)).toBe(true);
  });

  test('should return false for null', () => {
    expect(isEmptyObject(null)).toBe(false);
  });

  test('should return false for arrays', () => {
    expect(isEmptyObject([])).toBe(false);
  });

  test('should return false for non-object types', () => {
    expect(isEmptyObject(123)).toBe(false);
    expect(isEmptyObject('string')).toBe(false);
    expect(isEmptyObject(true)).toBe(false);
    expect(isEmptyObject(undefined)).toBe(false);
  });
});

describe('deepEqualWithIntersection', () => {
  test('should return true for identical objects with intersecting keys', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 3 };
    expect(deepEqualWithIntersection(obj1, obj2)).toBe(true);
  });

  test('should return true if intersecting keys are equal, even with extra keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2, c: 3 };
    expect(deepEqualWithIntersection(obj1, obj2)).toBe(true);
  });

  test('should return false if intersecting keys are not equal', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 99, c: 3 };
    expect(deepEqualWithIntersection(obj1, obj2)).toBe(false);
  });

  test('should handle nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } };
    const obj2 = { a: 1, b: { c: 2, d: 3, e: 4 } };
    expect(deepEqualWithIntersection(obj1, obj2)).toBe(true);

    const obj3 = { a: 1, b: { c: 2, d: 3 } };
    const obj4 = { a: 1, b: { c: 99, d: 3 } };
    expect(deepEqualWithIntersection(obj3, obj4)).toBe(false);
  });

  test('should handle arrays within objects', () => {
    const obj1 = { a: [1, 2], b: 3 };
    const obj2 = { a: [1, 2], b: 3, c: 4 };
    expect(deepEqualWithIntersection(obj1, obj2)).toBe(true);

    const obj3 = { a: [1, 2], b: 3 };
    const obj4 = { a: [1, 99], b: 3 };
    expect(deepEqualWithIntersection(obj3, obj4)).toBe(false);
  });

  test('should return true for empty objects', () => {
    expect(deepEqualWithIntersection({}, {})).toBe(true);
  });

  test('should return false for non-object types', () => {
    expect(deepEqualWithIntersection(1, 1)).toBe(true);
    expect(deepEqualWithIntersection(1, 2)).toBe(false);
    expect(deepEqualWithIntersection('a', 'a')).toBe(true);
    expect(deepEqualWithIntersection('a', 'b')).toBe(false);
    expect(deepEqualWithIntersection(true, true)).toBe(true);
    expect(deepEqualWithIntersection(true, false)).toBe(false);
  });

  test('should return false if one is object and other is not', () => {
    expect(deepEqualWithIntersection({ a: 1 }, 1)).toBe(false);
    expect(deepEqualWithIntersection(1, { a: 1 })).toBe(false);
  });
});
