import isWeakSet from './is-weakset';

describe('isWeakSet', () => {
  test('should return true for a WeakSet object', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
  });

  test('should return false for non-WeakSet values', () => {
    expect(isWeakSet(null)).toBe(false);
    expect(isWeakSet(undefined)).toBe(false);
    expect(isWeakSet({})).toBe(false);
    expect(isWeakSet([])).toBe(false);
    expect(isWeakSet(new Map())).toBe(false);
    expect(isWeakSet(new Set())).toBe(false);
    expect(isWeakSet(new WeakMap())).toBe(false);
    expect(isWeakSet(123)).toBe(false);
    expect(isWeakSet('weakset')).toBe(false);
    expect(isWeakSet(true)).toBe(false);
  });

  test('should return false for objects mimicking WeakSet behavior', () => {
    const fakeWeakSet = {
      add: () => {},
      has: () => {},
      delete: () => {}
    };
    expect(isWeakSet(fakeWeakSet)).toBe(false);
  });
});
