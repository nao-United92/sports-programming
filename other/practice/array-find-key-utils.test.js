const { findKey } = require('./array-find-key-utils.js');

describe('findKey', () => {
  const data = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', city: 'New York' },
    { id: 3, age: 25, role: 'Admin' }
  ];

  it('should return the key if a value is found in an object within the array', () => {
    expect(findKey(data, 'Alice')).toBe('name');
  });

  it('should return the key for a value that appears multiple times, returning the first occurrence', () => {
    const multiData = [{ a: 1, b: 2 }, { c: 1, d: 3 }];
    expect(findKey(multiData, 1)).toBe('a');
  });

  it('should return undefined if the value is not found', () => {
    expect(findKey(data, 'Charlie')).toBeUndefined();
  });

  it('should return undefined for an empty array', () => {
    expect(findKey([], 'test')).toBeUndefined();
  });

  it('should handle non-array inputs gracefully', () => {
    expect(findKey(null, 'test')).toBeUndefined();
    expect(findKey(undefined, 'test')).toBeUndefined();
    expect(findKey({}, 'test')).toBeUndefined();
  });

  it('should handle objects with numeric values', () => {
    expect(findKey(data, 30)).toBe('age');
  });
});
