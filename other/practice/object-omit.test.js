import { omit } from './object-omit';

describe('omit', () => {
  test('omits specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('returns a new object', () => {
    const obj = { a: 1 };
    const result = omit(obj, ['a']);
    expect(result).not.toBe(obj);
  });

  test('does nothing if keys do not exist', () => {
    const obj = { a: 1 };
    expect(omit(obj, ['b'])).toEqual({ a: 1 });
  });
});
