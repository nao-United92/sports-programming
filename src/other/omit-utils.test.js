import { omit } from './omit-utils.js';

describe('omit', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  test('should omit specified keys from an object', () => {
    const expected = { 'b': '2' };
    expect(omit(object, ['a', 'c'])).toEqual(expected);
  });

  test('should not mutate the original object', () => {
    omit(object, ['a']);
    expect(object).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
  });

  test('should not be affected by keys that do not exist', () => {
    const expected = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, ['d', 'e'])).toEqual(expected);
  });

  test('should return a shallow copy if keys array is empty', () => {
    const result = omit(object, []);
    expect(result).toEqual(object);
    expect(result).not.toBe(object);
  });

  test('should return an empty object for null or undefined input', () => {
    expect(omit(null, ['a', 'b'])).toEqual({});
    expect(omit(undefined, ['a', 'b'])).toEqual({});
  });
});
