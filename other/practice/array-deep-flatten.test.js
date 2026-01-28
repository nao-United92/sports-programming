const { deepFlatten } = require('./array-deep-flatten');

describe('deepFlatten', () => {
  it('should flatten a deeply nested array', () => {
    const nestedArray = [1, [2, [3, [4, 5]], 6], 7];
    expect(deepFlatten(nestedArray)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should handle an already flat array', () => {
    const flatArray = [1, 2, 3, 4, 5];
    expect(deepFlatten(flatArray)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    expect(deepFlatten([])).toEqual([]);
  });

  it('should handle an array with empty arrays', () => {
    const arrayWithEmpty = [1, [], [2, []], [[], 3]];
    expect(deepFlatten(arrayWithEmpty)).toEqual([1, 2, 3]);
  });

  it('should handle various data types', () => {
    const mixedArray = [1, ['a', [true, null]], { obj: 1 }];
    expect(deepFlatten(mixedArray)).toEqual([1, 'a', true, null, { obj: 1 }]);
  });
  
  it('should handle non-array input by wrapping it in an array', () => {
    expect(deepFlatten('string')).toEqual(['string']);
    expect(deepFlatten({ a: 1 })).toEqual([{ a: 1 }]);
    expect(deepFlatten(null)).toEqual([null]);
  });
});
