const fillAll = require('./array-fill-all');

describe('fillAll', () => {
  test('should fill an array with a specified value', () => {
    expect(fillAll([1, 2, 3], 0)).toEqual([0, 0, 0]);
  });

  test('should return a new array and not modify the original', () => {
    const originalArr = [1, 2, 3];
    const newArr = fillAll(originalArr, 0);
    expect(newArr).toEqual([0, 0, 0]);
    expect(originalArr).toEqual([1, 2, 3]); // Original array should be unchanged
  });

  test('should handle an empty array', () => {
    expect(fillAll([], 0)).toEqual([]);
  });

  test('should handle different data types for value', () => {
    expect(fillAll([1, 2], 'a')).toEqual(['a', 'a']);
    expect(fillAll([1, 2], null)).toEqual([null, null]);
    expect(fillAll([1, 2], {
      key: 'value'
    })).toEqual([{
      key: 'value'
    }, {
      key: 'value'
    }]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => fillAll(null, 0)).toThrow('First argument must be an array.');
    expect(() => fillAll('string', 0)).toThrow('First argument must be an array.');
    expect(() => fillAll(123, 0)).toThrow('First argument must be an array.');
  });
});
