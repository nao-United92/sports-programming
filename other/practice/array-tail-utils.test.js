const { tail } = require('./array-tail-utils');

describe('tail', () => {
  test('should return all but the first element of an array', () => {
    expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
  });

  test('should return an empty array if the array has one element', () => {
    expect(tail([1])).toEqual([]);
  });

  test('should return an empty array if the array is empty', () => {
    expect(tail([])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    tail(arr);
    expect(arr).toEqual([1, 2, 3]);
  });
  
  test('should return an empty array for non-array inputs', () => {
    expect(tail(null)).toEqual([]);
    expect(tail(undefined)).toEqual([]);
    expect(tail({})).toEqual([]);
  });
});