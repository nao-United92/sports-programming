import { pick } from './pick-utils.js';

describe('pick', () => {
  test('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should return a new object without modifying the original', () => {
    const obj = { a: 1, b: 2, c: 3 };
    pick(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should handle non-existent keys gracefully', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['c'])).toEqual({});
  });

  test('should return an empty object if input is null or not an object', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });

  test('should return an empty object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });
});
