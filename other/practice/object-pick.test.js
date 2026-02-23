import { pick } from './object-pick';

describe('pick', () => {
  const obj = { a: 1, b: 2, c: 3 };

  test('picks specified keys from an object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('returns an empty object if no keys match', () => {
    expect(pick(obj, ['d', 'e'])).toEqual({});
  });

  test('handles null or undefined objects', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  test('ignores keys that are not on the object', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });
});
