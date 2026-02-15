const unique = require('./array-unique');

describe('unique', () => {
  test('should return an array with unique elements', () => {
    expect(unique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with no duplicate elements', () => {
    expect(unique([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    expect(unique([])).toEqual([]);
  });

  test('should handle an array with all duplicate elements', () => {
    expect(unique([1, 1, 1, 1, 1])).toEqual([1]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(unique([1, 'a', 1, 'b', null, null, undefined, undefined])).toEqual([1, 'a', 'b', null, undefined]);
  });

  test('should handle arrays with objects (reference equality)', () => {
    const obj1 = {
      a: 1
    };
    const obj2 = {
      a: 1
    };
    expect(unique([obj1, obj1, obj2])).toEqual([obj1, obj2]);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => unique(null)).toThrow('Argument must be an array.');
    expect(() => unique('string')).toThrow('Argument must be an array.');
    expect(() => unique(123)).toThrow('Argument must be an array.');
  });
});
