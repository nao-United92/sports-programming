const { pick, omit, has } = require('./object-property-utils.js');

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if the source object is null or not an object', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });

  it('should ignore keys that do not exist in the source object', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });
});

describe('omit', () => {
  it('should create an object without the omitted properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should return an empty object if the source object is null or not an object', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
    expect(omit(123, ['a'])).toEqual({});
  });

  it('should not change the object if keys to omit do not exist', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c', 'd'])).toEqual({ a: 1, b: 2 });
  });
});

describe('has', () => {
  it('should return true if an object has the specified property', () => {
    const obj = { a: 1 };
    expect(has(obj, 'a')).toBe(true);
  });

  it('should return false if an object does not have the specified property', () => {
    const obj = { a: 1 };
    expect(has(obj, 'b')).toBe(false);
  });

  it('should return false for null or undefined objects', () => {
    expect(has(null, 'a')).toBe(false);
    expect(has(undefined, 'a')).toBe(false);
  });
});
