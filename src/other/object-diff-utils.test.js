import { diff } from './object-diff-utils.js';

describe('diff', () => {
  it('should return an empty object if there are no differences', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'hello' };
    expect(diff(obj1, obj2)).toEqual({});
  });

  it('should return properties that are added in obj2', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1, b: 'new' };
    expect(diff(obj1, obj2)).toEqual({ b: 'new' });
  });

  it('should return properties that have changed in obj2', () => {
    const obj1 = { a: 1, b: 'old' };
    const obj2 = { a: 1, b: 'new' };
    expect(diff(obj1, obj2)).toEqual({ b: 'new' });
  });

  it('should return a mix of added and changed properties', () => {
    const obj1 = { a: 1, b: 'old' };
    const obj2 = { a: 1, b: 'new', c: true };
    expect(diff(obj1, obj2)).toEqual({ b: 'new', c: true });
  });

  it('should handle obj1 being null or undefined', () => {
    const obj2 = { a: 1, b: 'test' };
    expect(diff(null, obj2)).toEqual({ a: 1, b: 'test' });
    expect(diff(undefined, obj2)).toEqual({ a: 1, b: 'test' });
  });

  it('should handle obj2 being null or undefined', () => {
    const obj1 = { a: 1, b: 'test' };
    expect(diff(obj1, null)).toEqual({});
    expect(diff(obj1, undefined)).toEqual({});
  });

  it('should handle both obj1 and obj2 being null or undefined', () => {
    expect(diff(null, null)).toEqual({});
    expect(diff(undefined, undefined)).toEqual({});
    expect(diff(null, undefined)).toEqual({});
    expect(diff(undefined, null)).toEqual({});
  });

  it('should treat identical nested objects as no difference (shallow diff)', () => {
    const nestedObj = { c: 3 };
    const obj1 = { a: 1, b: nestedObj };
    const obj2 = { a: 1, b: nestedObj };
    expect(diff(obj1, obj2)).toEqual({});
  });

  it('should detect changes in nested object references (shallow diff)', () => {
    const obj1 = { a: 1, b: { c: 3 } };
    const obj2 = { a: 1, b: { c: 4 } }; // Different reference and content
    expect(diff(obj1, obj2)).toEqual({ b: { c: 4 } });
  });

  it('should detect changes in array references (shallow diff)', () => {
    const arr1 = [1, 2];
    const arr2 = [1, 3];
    const obj1 = { a: arr1 };
    const obj2 = { a: arr2 };
    expect(diff(obj1, obj2)).toEqual({ a: [1, 3] });
  });

  it('should handle primitive values as inputs', () => {
    expect(diff(1, 2)).toEqual({}); // No properties to compare
    expect(diff('a', 'b')).toEqual({}); // No properties to compare
    expect(diff(1, { a: 1 })).toEqual({ a: 1 }); // obj1 is primitive, obj2 is object
    expect(diff({ a: 1 }, 2)).toEqual({}); // obj1 is object, obj2 is primitive
  });

  it('should not include properties removed from obj2', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, c: 3 };
    expect(diff(obj1, obj2)).toEqual({}); // 'b' is removed, but not a difference in obj2
  });
});
