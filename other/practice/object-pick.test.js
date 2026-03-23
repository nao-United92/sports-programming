import { pick } from './object-pick.js';

describe('pick', () => {
  test('should pick specified keys from object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should return empty object if input is invalid', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  test('should ignore keys not present in object', () => {
    const obj = { a: 1 };
    expect(pick(obj, ['b'])).toEqual({});
  });
});
