import { pick } from './object-pick-utils.js';

describe('pick', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('should return an object with picked properties', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should not include properties that are not in the object', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no properties are picked', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });

  test('should handle nested objects', () => {
    const nestedObj = { a: 1, b: { c: 2, d: 3 } };
    expect(pick(nestedObj, ['b'])).toEqual({ b: { c: 2, d: 3 } });
  });
});
