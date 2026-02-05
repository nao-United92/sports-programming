const { sortObjectsByKey } = require('./array-sort-objects-by-key');

describe('sortObjectsByKey', () => {
  const data = [
    { id: 1, name: 'Charlie', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ];

  it('should sort an array of objects by a key in ascending order by default', () => {
    const sorted = sortObjectsByKey(data, 'name');
    expect(sorted).toEqual([
      { id: 2, name: 'Alice', age: 25 },
      { id: 3, name: 'Bob', age: 35 },
      { id: 1, name: 'Charlie', age: 30 },
    ]);
  });

  it('should sort an array of objects by a key in descending order', () => {
    const sorted = sortObjectsByKey(data, 'age', 'desc');
    expect(sorted).toEqual([
      { id: 3, name: 'Bob', age: 35 },
      { id: 1, name: 'Charlie', age: 30 },
      { id: 2, name: 'Alice', age: 25 },
    ]);
  });

  it('should handle numeric keys', () => {
    const sorted = sortObjectsByKey(data, 'id');
    expect(sorted).toEqual([
      { id: 1, name: 'Charlie', age: 30 },
      { id: 2, name: 'Alice', age: 25 },
      { id: 3, name: 'Bob', age: 35 },
    ]);
  });

  it('should return a new array without modifying the original', () => {
    const originalData = [...data];
    sortObjectsByKey(data, 'name');
    expect(data).toEqual(originalData);
  });

  it('should handle an empty array', () => {
    expect(sortObjectsByKey([], 'name')).toEqual([]);
  });

  it('should throw an error if the first argument is not an array of objects', () => {
    expect(() => sortObjectsByKey([1, 2, 3], 'name')).toThrow(TypeError);
    expect(() => sortObjectsByKey({}, 'name')).toThrow(TypeError);
    expect(() => sortObjectsByKey([null], 'name')).toThrow(TypeError);
  });
});
