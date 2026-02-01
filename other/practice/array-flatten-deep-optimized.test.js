const arrayFlattenDeepOptimized = require('./array-flatten-deep-optimized');

describe('arrayFlattenDeepOptimized', () => {
  test('should return an empty array for an empty input array', () => {
    expect(arrayFlattenDeepOptimized([])).toEqual([]);
  });

  test('should flatten a simple nested array', () => {
    const arr = [1, [2, 3], 4];
    expect(arrayFlattenDeepOptimized(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should flatten a deeply nested array', () => {
    const arr = [1, [2, [3, 4]], 5, [6, [7, [8]]]];
    expect(arrayFlattenDeepOptimized(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should handle arrays with non-array elements', () => {
    const arr = [1, 'a', null, undefined, {
      key: 'value'
    }, [2, 3]];
    expect(arrayFlattenDeepOptimized(arr)).toEqual([1, 'a', null, undefined, {
      key: 'value'
    }, 2, 3]);
  });

  test('should handle an array with no nesting', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayFlattenDeepOptimized(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with empty nested arrays', () => {
    const arr = [1, [],
      [2, []], 3, [
        []
      ]
    ];
    expect(arrayFlattenDeepOptimized(arr)).toEqual([1, 2, 3]);
  });

  test('should handle very deeply nested arrays without stack overflow', () => {
    // Construct a deeply nested array: [0, [1, [2, ... [999]]]]
    let deepArray = [];
    let current = deepArray;
    for (let i = 0; i < 500; i++) { // Using 500 for a reasonable depth
      if (i === 499) {
        current.push(i);
      } else {
        let nextLevel = [];
        current.push(i, nextLevel);
        current = nextLevel;
      }
    }
    // The structure generated will be like [0, [1, [2, ... [499]]]]
    // The expected flattened array should be [0, 1, 2, ..., 499]
    const expectedFlattened = Array.from({
      length: 500
    }, (_, i) => i);
    expect(arrayFlattenDeepOptimized(deepArray)).toEqual(expectedFlattened);
  });


  test('should throw TypeError if input is not an array', () => {
    expect(() => arrayFlattenDeepOptimized(null)).toThrow(TypeError);
    expect(() => arrayFlattenDeepOptimized(undefined)).toThrow(TypeError);
    expect(() => arrayFlattenDeepOptimized('string')).toThrow(TypeError);
    expect(() => arrayFlattenDeepOptimized(123)).toThrow(TypeError);
    expect(() => arrayFlattenDeepOptimized({})).toThrow(TypeError);
  });
});