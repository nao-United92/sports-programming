const partition = require('./array-partition-utils');

describe('partition', () => {
  test('should partition numbers into even and odd', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [evens, odds] = partition(numbers, n => n % 2 === 0);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should partition strings based on length', () => {
    const words = ['apple', 'cat', 'banana', 'dog', 'elephant'];
    const [longWords, shortWords] = partition(words, word => word.length > 4);
    expect(longWords).toEqual(['apple', 'banana', 'elephant']);
    expect(shortWords).toEqual(['cat', 'dog']);
  });

  test('should handle an empty array', () => {
    const [pass, fail] = partition([], () => true);
    expect(pass).toEqual([]);
    expect(fail).toEqual([]);
  });

  test('should handle all elements passing the predicate', () => {
    const numbers = [2, 4, 6];
    const [pass, fail] = partition(numbers, n => n % 2 === 0);
    expect(pass).toEqual([2, 4, 6]);
    expect(fail).toEqual([]);
  });

  test('should handle all elements failing the predicate', () => {
    const numbers = [1, 3, 5];
    const [pass, fail] = partition(numbers, n => n % 2 === 0);
    expect(pass).toEqual([]);
    expect(fail).toEqual([1, 3, 5]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => partition(null, () => true)).toThrow('Expected an array for the first argument');
    expect(() => partition(123, () => true)).toThrow('Expected an array for the first argument');
  });

  test('should throw an error for non-function predicate', () => {
    expect(() => partition([1, 2], null)).toThrow('Expected a function for the second argument (predicate)');
    expect(() => partition([1, 2], 'not a function')).toThrow('Expected a function for the second argument (predicate)');
  });
});
