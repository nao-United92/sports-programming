const flattenShallow = require('./array-flatten-shallow');

describe('flattenShallow', () => {
  test('should flatten a nested array by one level', () => {
    expect(flattenShallow([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    expect(flattenShallow([1, [2, [3]], 4])).toEqual([1, 2, [3], 4]); // Only flattens one level
  });

  test('should handle an already flat array', () => {
    expect(flattenShallow([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle an empty array', () => {
    expect(flattenShallow([])).toEqual([]);
  });

  test('should handle an array with empty nested arrays', () => {
    expect(flattenShallow([1, [], 2])).toEqual([1, 2]);
  });

  test('should handle an array with only nested arrays', () => {
    expect(flattenShallow([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
  });

  test('should handle mixed data types', () => {
    expect(flattenShallow([1, ['a', null], 2])).toEqual([1, 'a', null, 2]);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => flattenShallow(null)).toThrow('Argument must be an array.');
    expect(() => flattenShallow('string')).toThrow('Argument must be an array.');
    expect(() => flattenShallow(123)).toThrow('Argument must be an array.');
  });
});
