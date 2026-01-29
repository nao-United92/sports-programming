import uniqueBy from './array-unique-by-key-utils';

describe('uniqueBy', () => {
  it('should return unique elements based on a key', () => {
    const array = [
      { id: 1, name: 'apple' },
      { id: 2, name: 'banana' },
      { id: 3, name: 'apple' },
      { id: 4, name: 'orange' },
    ];
    const expected = [
      { id: 1, name: 'apple' },
      { id: 2, name: 'banana' },
      { id: 4, name: 'orange' },
    ];
    expect(uniqueBy(array, 'name')).toEqual(expected);
  });

  it('should preserve the first occurrence', () => {
    const array = [
      { id: 1, value: 100 },
      { id: 2, value: 200 },
      { id: 3, value: 100 },
    ];
    const expected = [
      { id: 1, value: 100 },
      { id: 2, value: 200 },
    ];
    expect(uniqueBy(array, 'value')).toEqual(expected);
  });

  it('should return an empty array for an empty input array', () => {
    expect(uniqueBy([], 'id')).toEqual([]);
  });

  it('should handle an array with no duplicates', () => {
    const array = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
    ];
    expect(uniqueBy(array, 'name')).toEqual(array);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(uniqueBy(null, 'id')).toEqual([]);
    expect(uniqueBy(undefined, 'id')).toEqual([]);
  });

  it('should handle keys that are not present in all objects', () => {
    const array = [
      { id: 1, name: 'a' },
      { id: 2 },
      { id: 3, name: 'a' },
      { id: 4 },
    ];
    const expected = [
      { id: 1, name: 'a' },
      { id: 2 },
    ];
    expect(uniqueBy(array, 'name')).toEqual(expected);
  });
});
