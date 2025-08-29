
import { deepMergeWith } from './deep-merge-with-utils.js';

describe('deepMergeWith', () => {
  it('should perform a basic deep merge when no customizer is provided', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    const expected = { a: 1, b: { c: 2, d: 3 }, e: 4 };
    expect(deepMergeWith(obj1, obj2)).toEqual(expected);
  });

  it('should perform a basic deep merge when customizer returns undefined', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    const customizer = (objValue, srcValue) => undefined; // Always return undefined
    const expected = { a: 1, b: { c: 2, d: 3 }, e: 4 };
    expect(deepMergeWith(obj1, obj2, customizer)).toEqual(expected);
  });

  it('should use customizer to concatenate arrays', () => {
    const obj1 = { a: [1, 2], b: 3 };
    const obj2 = { a: [3, 4], c: 5 };
    const customizer = (objValue, srcValue) => {
      if (Array.isArray(objValue) && Array.isArray(srcValue)) {
        return objValue.concat(srcValue);
      }
    };
    const expected = { a: [1, 2, 3, 4], b: 3, c: 5 };
    expect(deepMergeWith(obj1, obj2, customizer)).toEqual(expected);
  });

  it('should use customizer to sum numbers', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 5, b: { c: 10 } };
    const customizer = (objValue, srcValue) => {
      if (typeof objValue === 'number' && typeof srcValue === 'number') {
        return objValue + srcValue;
      }
    };
    const expected = { a: 6, b: { c: 12 } };
    expect(deepMergeWith(obj1, obj2, customizer)).toEqual(expected);
  });

  it('should handle customizer for specific keys', () => {
    const obj1 = { id: 1, data: { value: 'a' } };
    const obj2 = { id: 2, data: { value: 'b' } };
    const customizer = (objValue, srcValue, key) => {
      if (key === 'id') {
        return objValue; // Keep original ID
      }
    };
    const expected = { id: 1, data: { value: 'b' } };
    expect(deepMergeWith(obj1, obj2, customizer)).toEqual(expected);
  });

  it('should handle null and undefined values correctly', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = { a: undefined, b: 2, c: null };
    const expected = { a: undefined, b: 2, c: null };
    expect(deepMergeWith(obj1, obj2)).toEqual(expected);
  });

  it('should not modify original objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    const originalObj1 = JSON.parse(JSON.stringify(obj1));
    const originalObj2 = JSON.parse(JSON.stringify(obj2));

    deepMergeWith(obj1, obj2);

    expect(obj1).toEqual(originalObj1);
    expect(obj2).toEqual(originalObj2);
  });
});
