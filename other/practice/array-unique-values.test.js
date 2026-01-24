const { getUniqueValues } = require('./array-unique-values');

describe('getUniqueValues', () => {
  it('should return an array with unique values from an array of primitives', () => {
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    expect(getUniqueValues(numbers)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with mixed data types', () => {
    const mixed = [1, 'a', 2, 'b', 'a', 1, null, undefined, null];
    expect(getUniqueValues(mixed)).toEqual([1, 'a', 2, 'b', null, undefined]);
  });

  it('should return an empty array when given an empty array', () => {
    expect(getUniqueValues([])).toEqual([]);
  });

  it('should handle an array with no duplicate values', () => {
    const noDuplicates = [1, 2, 3, 'a', 'b', 'c'];
    expect(getUniqueValues(noDuplicates)).toEqual([1, 2, 3, 'a', 'b', 'c']);
  });

  it('should throw a TypeError if the argument is not an array', () => {
    expect(() => getUniqueValues({})).toThrow(TypeError);
    expect(() => getUniqueValues('string')).toThrow(TypeError);
    expect(() => getUniqueValues(123)).toThrow(TypeError);
    expect(() => getUniqueValues(null)).toThrow(TypeError);
  });
  
  it('should handle arrays with object references (by reference)', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const objects = [obj1, obj2, obj1];
    expect(getUniqueValues(objects)).toEqual([obj1, obj2]);
  });
});
