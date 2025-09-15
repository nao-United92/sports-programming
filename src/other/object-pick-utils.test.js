import { pick } from './object-pick-utils.js';

describe('pick', () => {
  test('should pick specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should return an empty object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  test('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should handle an empty object', () => {
    const obj = {};
    expect(pick(obj, ['a'])).toEqual({});
  });

  test('should return an empty object for non-object inputs', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });

  test('should handle inherited properties correctly (not pick them)', () => {
    const proto = { a: 1 };
    const obj = Object.create(proto);
    obj.b = 2;
    expect(pick(obj, ['a', 'b'])).toEqual({ b: 2 });
  });
});
