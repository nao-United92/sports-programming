const { uniqueBy } = require('./array-unique-by-iterator-utils');

describe('uniqueBy', () => {
  test('should return unique elements of an array based on a given function', () => {
    const arr = [
      { id: 1, name: 'apple' },
      { id: 2, name: 'banana' },
      { id: 3, name: 'apple' },
    ];
    expect(uniqueBy(arr, (x) => x.name)).toEqual([
      { id: 1, name: 'apple' },
      { id: 2, name: 'banana' },
    ]);
  });

  test('should work with an array of numbers', () => {
    const arr = [1.2, 1.5, 2.1, 2.8, 3.3];
    expect(uniqueBy(arr, Math.floor)).toEqual([1.2, 2.1, 3.3]);
  });

  test('should return an empty array when given an empty array', () => {
    expect(uniqueBy([], (x) => x)).toEqual([]);
  });

  test('should handle an array with all unique elements', () => {
    const arr = [{ val: 1 }, { val: 2 }, { val: 3 }];
    expect(uniqueBy(arr, (x) => x.val)).toEqual(arr);
  });

  test('should handle an array with all duplicate elements', () => {
    const arr = [
      { type: 'a' },
      { type: 'a' },
      { type: 'a' },
    ];
    expect(uniqueBy(arr, (x) => x.type)).toEqual([{ type: 'a' }]);
  });
});
