import mapEntries from './object-map-entries-utils';

describe('mapEntries', () => {
  const obj = { a: 1, b: 2, c: 3 };

  it('should transform object entries using the provided mapper function', () => {
    const mapper = (key, value) => [`key_${key}`, value * 2];
    expect(mapEntries(obj, mapper)).toEqual({ key_a: 2, key_b: 4, key_c: 6 });
  });

  it('should pass full object as an additional argument to the mapper', () => {
    const mapper = jest.fn((key, value, fullObject) => {
      expect(fullObject).toBe(obj);
      return [`${key}${value}`, value];
    });
    expect(mapEntries(obj, mapper)).toEqual({ a1: 1, b2: 2, c3: 3 });
    expect(mapper).toHaveBeenCalledTimes(3); // a, b, c
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(mapEntries(null, () => [])).toEqual({});
    expect(mapEntries(undefined, () => [])).toEqual({});
  });

  it('should return a shallow copy of the object if mapper is not a function', () => {
    expect(mapEntries(obj, null)).toEqual(obj);
    expect(mapEntries(obj, undefined)).toEqual(obj);
    expect(mapEntries(obj, 'string')).toEqual(obj);
  });

  it('should handle empty objects', () => {
    expect(mapEntries({}, () => [])).toEqual({});
  });

  it('should handle arrays as input by returning an empty object', () => {
    expect(mapEntries([1, 2, 3], () => [])).toEqual({});
  });

  it('should correctly handle mapper returning non-array for a single key', () => {
    const mapper = (key, value) => [`${key}X`, value];
    expect(mapEntries({ a: 1 }, mapper)).toEqual({ aX: 1 });
  });

  it('should handle values other than primitive types', () => {
    const complexObj = {
      user: { name: 'Alice', age: 30 },
      settings: { theme: 'dark' },
    };
    const mapper = (key, value) => [`${key}Details`, value];
    expect(mapEntries(complexObj, mapper)).toEqual({
      userDetails: { name: 'Alice', age: 30 },
      settingsDetails: { theme: 'dark' },
    });
  });
});