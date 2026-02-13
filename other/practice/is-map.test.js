import isMap from './is-map';

describe('isMap', () => {
  test('should return true for a Map object', () => {
    expect(isMap(new Map())).toBe(true);
    const myMap = new Map();
    myMap.set('a', 1);
    expect(isMap(myMap)).toBe(true);
  });

  test('should return false for non-Map values', () => {
    expect(isMap(null)).toBe(false);
    expect(isMap(undefined)).toBe(false);
    expect(isMap({})).toBe(false);
    expect(isMap([])).toBe(false);
    expect(isMap(new Set())).toBe(false);
    expect(isMap(new WeakMap())).toBe(false);
    expect(isMap(new ArrayBuffer(8))).toBe(false);
    expect(isMap(123)).toBe(false);
    expect(isMap('map')).toBe(false);
    expect(isMap(true)).toBe(false);
  });

  test('should return false for objects mimicking Map behavior', () => {
    const fakeMap = {
      size: 0,
      set: () => {},
      get: () => {}
    };
    expect(isMap(fakeMap)).toBe(false);
  });
});
