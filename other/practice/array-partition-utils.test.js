const arrayPartition = require('./array-partition-utils');

describe('arrayPartition', () => {
  test('should partition an array of numbers into even and odd', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const [evens, odds] = arrayPartition(arr, (num) => num % 2 === 0);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should partition an array of strings by length', () => {
    const arr = ['apple', 'banana', 'cat', 'doggy', 'elephant'];
    const [longWords, shortWords] = arrayPartition(arr, (word) => word.length > 4);
    expect(longWords).toEqual(['apple', 'banana', 'doggy', 'elephant']);
    expect(shortWords).toEqual(['cat']);
  });

  test('should handle an empty array', () => {
    const arr = [];
    const [trueArr, falseArr] = arrayPartition(arr, (item) => item > 0);
    expect(trueArr).toEqual([]);
    expect(falseArr).toEqual([]);
  });

  test('should handle a predicate that always returns true', () => {
    const arr = [1, 2, 3];
    const [trueArr, falseArr] = arrayPartition(arr, () => true);
    expect(trueArr).toEqual([1, 2, 3]);
    expect(falseArr).toEqual([]);
  });

  test('should handle a predicate that always returns false', () => {
    const arr = [1, 2, 3];
    const [trueArr, falseArr] = arrayPartition(arr, () => false);
    expect(trueArr).toEqual([]);
    expect(falseArr).toEqual([1, 2, 3]);
  });

  test('should pass index and original array to predicate', () => {
    const arr = ['a', 'b', 'c'];
    const mockPredicate = jest.fn((item, index) => index % 2 === 0);
    arrayPartition(arr, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith('a', 0, arr);
    expect(mockPredicate).toHaveBeenCalledWith('b', 1, arr);
    expect(mockPredicate).toHaveBeenCalledWith('c', 2, arr);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayPartition(null, () => true)).toThrow('Expected an array for the first argument.');
    expect(() => arrayPartition(undefined, () => true)).toThrow('Expected an array for the first argument.');
    expect(() => arrayPartition('string', () => true)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arrayPartition([1, 2], null)).toThrow('Expected a function for the second argument.');
    expect(() => arrayPartition([1, 2], 'string')).toThrow('Expected a function for the second argument.');
  });
});