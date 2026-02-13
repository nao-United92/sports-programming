import isSet from './is-set';

describe('isSet', () => {
  test('should return true for a Set object', () => {
    expect(isSet(new Set())).toBe(true);
    const mySet = new Set();
    mySet.add(1);
    expect(isSet(mySet)).toBe(true);
  });

  test('should return false for non-Set values', () => {
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet({})).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet(new Map())).toBe(false);
    expect(isSet(new WeakSet())).toBe(false);
    expect(isSet(123)).toBe(false);
    expect(isSet('set')).toBe(false);
    expect(isSet(true)).toBe(false);
  });

  test('should return false for objects mimicking Set behavior', () => {
    const fakeSet = {
      size: 0,
      add: () => {},
      has: () => {}
    };
    expect(isSet(fakeSet)).toBe(false);
  });
});
