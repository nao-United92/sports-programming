const repeatElements = require('./array-repeat-elements');

describe('repeatElements', () => {
  test('should repeat each element a specified number of times', () => {
    expect(repeatElements([1, 2, 3], 3)).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(repeatElements([], 5)).toEqual([]);
  });

  test('should return an empty array if times is 0', () => {
    expect(repeatElements([1, 2, 3], 0)).toEqual([]);
  });

  test('should handle various data types', () => {
    const mixedArray = ['a', null, { id: 1 }];
    const repeated = repeatElements(mixedArray, 2);
    expect(repeated).toEqual(['a', 'a', null, null, { id: 1 }, { id: 1 }]);
    // Ensure object references are duplicated, not deep cloned
    expect(repeated[4]).toBe(repeated[5]);
  });
});
