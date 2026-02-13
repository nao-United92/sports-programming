import isWeakMap from './is-weakmap';

describe('isWeakMap', () => {
  test('should return true for a WeakMap object', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  });

  test('should return false for non-WeakMap values', () => {
    expect(isWeakMap(null)).toBe(false);
    expect(isWeakMap(undefined)).toBe(false);
    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap([])).toBe(false);
    expect(isWeakMap(new Map())).toBe(false);
    expect(isWeakMap(new Set())).toBe(false);
    expect(isWeakMap(new WeakSet())).toBe(false);
    expect(isWeakMap(123)).toBe(false);
    expect(isWeakMap('weakmap')).toBe(false);
    expect(isWeakMap(true)).toBe(false);
  });

  test('should return false for objects mimicking WeakMap behavior', () => {
    const fakeWeakMap = {
      set: () => {},
      get: () => {},
      has: () => {}
    };
    expect(isWeakMap(fakeWeakMap)).toBe(false);
  });
});
