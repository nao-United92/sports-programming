const pick = require('./object-pick');

describe('pick', () => {
  test('should create an object with only the specified keys', () => {
    const original = { a: 1, b: 2, c: 3 };
    const expected = { a: 1, c: 3 };
    expect(pick(original, ['a', 'c'])).toEqual(expected);
  });

  test('should return a new object instance', () => {
    const original = { a: 1, b: 2 };
    const result = pick(original, ['a']);
    expect(result).not.toBe(original);
  });

  test('should not modify the original object', () => {
    const original = { a: 1, b: 2 };
    pick(original, ['a']);
    expect(original).toEqual({ a: 1, b: 2 });
  });

  test('should handle keys that do not exist in the object', () => {
    const original = { a: 1, b: 2 };
    const expected = { a: 1 };
    expect(pick(original, ['a', 'd'])).toEqual(expected);
  });

  test('should return an empty object if no keys are picked', () => {
    const original = { a: 1, b: 2 };
    expect(pick(original, [])).toEqual({});
  });

  test('should return an empty object if no matching keys are found', () => {
    const original = { a: 1, b: 2 };
    expect(pick(original, ['c', 'd'])).toEqual({});
  });
});
