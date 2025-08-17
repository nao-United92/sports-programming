import { pick, omit } from './object-utils';

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