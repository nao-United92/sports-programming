import { pick, omit, isEmptyObject } from './object-utils';

describe('pick', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 };

  test('should pick specified properties from an object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should return an empty object if no keys are specified', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('should ignore keys that do not exist in the object', () => {
    expect(pick(obj, ['a', 'e'])).toEqual({ a: 1 });
  });

  test('should handle non-object input gracefully', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });

  test('should return an empty object for an empty input object', () => {
    expect(pick({}, ['a'])).toEqual({});
  });
});

describe('omit', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 };

  test('should omit specified properties from an object', () => {
    expect(omit(obj, ['b', 'd'])).toEqual({ a: 1, c: 3 });
  });

  test('should return the original object if no keys are specified', () => {
    expect(omit(obj, [])).toEqual(obj);
  });

  test('should ignore keys that do not exist in the object', () => {
    expect(omit(obj, ['e', 'f'])).toEqual(obj);
  });

  test('should handle non-object input gracefully', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
    expect(omit('string', ['a'])).toEqual({});
    expect(omit(123, ['a'])).toEqual({});
  });

  test('should return an empty object for an empty input object', () => {
    expect(omit({}, ['a'])).toEqual({});
  });
});

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('should return false for an object with inherited properties', () => {
    function Foo() { this.a = 1; }
    function Bar() {}
    Bar.prototype = new Foo();
    expect(isEmptyObject(new Bar())).toBe(false);
  });

  test('should return false for an array', () => {
    expect(isEmptyObject([])).toBe(false);
  });

  test('should return false for null', () => {
    expect(isEmptyObject(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isEmptyObject(undefined)).toBe(false);
  });

  test('should return false for a string', () => {
    expect(isEmptyObject('string')).toBe(false);
  });

  test('should return false for a number', () => {
    expect(isEmptyObject(123)).toBe(false);
  });
});