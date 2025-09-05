import { pick, omit, isEmpty } from './object-utils.js';

describe('pick', () => {
  it('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['d', 'e'])).toEqual({});
  });
});

describe('omit', () => {
  it('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  it('should return the original object if no keys are omitted', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: 2, c: 3 });
  });
});

describe('isEmpty', () => {
  it('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return false for an object with inherited properties but no own properties', () => {
    function Parent() { this.a = 1; }
    function Child() {}
    Child.prototype = new Parent();
    const child = new Child();
    expect(isEmpty(child)).toBe(false); // Object.keys will return [] but it's not truly empty
  });

  it('should return false for null', () => {
    expect(isEmpty(null)).toBe(false);
  });

  it('should return false for non-object types', () => {
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty('string')).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(undefined)).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });
});