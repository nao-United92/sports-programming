const arrayChunkBy = require('./array-chunk-by-utils');

describe('arrayChunkBy', () => {
  test('should chunk an array based on a predicate function', () => {
    const arr = [1, 2, 3, 10, 11, 12, 20, 21];
    const isTenMultiple = (num) => num % 10 === 0;
    expect(arrayChunkBy(arr, isTenMultiple)).toEqual([
      [1, 2, 3],
      [10, 11, 12],
      [20, 21],
    ]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    const predicate = (num) => num > 5;
    expect(arrayChunkBy(arr, predicate)).toEqual([]);
  });

  test('should handle a predicate where all elements satisfy the condition', () => {
    const arr = [10, 20, 30];
    const isTenMultiple = (num) => num % 10 === 0;
    expect(arrayChunkBy(arr, isTenMultiple)).toEqual([
      [10],
      [20],
      [30]
    ]);
  });

  test('should handle a predicate where no elements satisfy the condition', () => {
    const arr = [1, 2, 3];
    const isTenMultiple = (num) => num % 10 === 0;
    expect(arrayChunkBy(arr, isTenMultiple)).toEqual([
      [1, 2, 3]
    ]);
  });

  test('should handle predicate using index', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const everyTwoElements = (item, index) => index % 2 === 0 && index !== 0; // New chunk every 2nd element, starting from index 2
    expect(arrayChunkBy(arr, everyTwoElements)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
      ['e']
    ]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    const predicate = (num) => num > 0;
    expect(() => arrayChunkBy(null, predicate)).toThrow(TypeError);
    expect(() => arrayChunkBy(123, predicate)).toThrow(TypeError);
    expect(() => arrayChunkBy('string', predicate)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arrayChunkBy(arr, null)).toThrow(TypeError);
    expect(() => arrayChunkBy(arr, 'string')).toThrow(TypeError);
    expect(() => arrayChunkBy(arr, 123)).toThrow(TypeError);
  });
});
