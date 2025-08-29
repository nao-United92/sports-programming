const { isEmpty, pick } = require('./object-utils.js');

describe('isEmpty', () => {
  test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for an object with only inherited properties', () => {
    const parent = { a: 1 };
    const child = Object.create(parent);
    expect(isEmpty(child)).toBe(true);
  });

  test('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });
});

describe('pick', () => {
  test('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  test('should ignore keys that are not in the object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  test('should not pick inherited properties', () => {
    const parent = { a: 1 };
    const child = Object.create(parent);
    child.b = 2;
    expect(pick(child, ['a', 'b'])).toEqual({ b: 2 });
  });
});