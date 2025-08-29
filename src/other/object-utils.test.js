const { isEmpty, pick, omit } = require('./object-utils.js');

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

describe('omit', () => {
  const obj = { a: 1, b: '2', c: true };

  test('should create an object with omitted properties', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should return a new object', () => {
    const result = omit(obj, ['a']);
    expect(result).not.toBe(obj);
  });

  test('should not modify the original object', () => {
    const original = { a: 1, b: 2 };
    omit(original, ['a']);
    expect(original).toEqual({ a: 1, b: 2 });
  });

  test('should ignore keys that are not in the object', () => {
    expect(omit(obj, ['d', 'e'])).toEqual(obj);
  });

  test('should return an equivalent object if no keys are omitted', () => {
    expect(omit(obj, [])).toEqual(obj);
  });

  test('should handle null and undefined input', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });

  test('should only omit own properties, not inherited ones', () => {
    const parent = { inherited: 'yes' };
    const child = Object.create(parent);
    child.own = 'yes';
    const result = omit(child, ['inherited']); // 'inherited' is not an own property
    expect(result).toEqual({ own: 'yes' });
    expect('inherited' in result).toBe(false); // Spread doesn't copy inherited props
  });
});