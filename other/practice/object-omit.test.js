import { omit } from './object-omit';

describe('omit', () => {
  const obj = { a: 1, b: 2, c: 3 };

  test('omits specified keys from an object', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('returns the same object if no keys match', () => {
    expect(omit(obj, ['d', 'e'])).toEqual(obj);
  });

  test('handles null or undefined objects', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });

  test('returns a new object (shallow copy)', () => {
    const result = omit(obj, []);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });
});
