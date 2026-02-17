import arrayPartition from './array-partition';

describe('arrayPartition', () => {
  test('should partition an array based on a predicate', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const isEven = (n) => n % 2 === 0;
    expect(arrayPartition(arr, isEven)).toEqual([
      [2, 4, 6],
      [1, 3, 5]
    ]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    const isEven = (n) => n % 2 === 0;
    expect(arrayPartition(arr, isEven)).toEqual([
      [],
      []
    ]);
  });

  test('should place all elements in the truthy array if all satisfy the predicate', () => {
    const arr = [2, 4, 6];
    const isEven = (n) => n % 2 === 0;
    expect(arrayPartition(arr, isEven)).toEqual([
      [2, 4, 6],
      []
    ]);
  });

  test('should place all elements in the falsy array if none satisfy the predicate', () => {
    const arr = [1, 3, 5];
    const isEven = (n) => n % 2 === 0;
    expect(arrayPartition(arr, isEven)).toEqual([
      [],
      [1, 3, 5]
    ]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayPartition(null, () => true)).toThrow('Expected an array for the first argument.');
    expect(() => arrayPartition(undefined, () => true)).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => arrayPartition([], null)).toThrow('Expected a function for the second argument.');
    expect(() => arrayPartition([], 'string')).toThrow('Expected a function for the second argument.');
  });
});
