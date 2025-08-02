import { omit } from './omit-utils.js';

describe('omit', () => {
  const obj = { a: 1, b: '2', c: true };

  test('should return a new object with omitted properties', () => {
    const result = omit(obj, ['b']);
    expect(result).toEqual({ a: 1, c: true });
  });

  test('should not change the object if keys to omit do not exist', () => {
    const result = omit(obj, ['d', 'e']);
    expect(result).toEqual(obj);
  });

  test('should return a copy of the object if no keys are omitted', () => {
    const result = omit(obj, []);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });

  test('should return an empty object if the source is not an object', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });

  test('should not modify the original object', () => {
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: '2', c: true });
  });
});