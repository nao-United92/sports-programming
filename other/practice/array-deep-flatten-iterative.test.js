const deepFlattenIterative = require('./array-deep-flatten-iterative');

describe('deepFlattenIterative', () => {
  test('deeply flattens nested arrays', () => {
    expect(deepFlattenIterative([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    expect(deepFlattenIterative([1, 2, 3])).toEqual([1, 2, 3]);
    expect(deepFlattenIterative([])).toEqual([]);
    expect(deepFlattenIterative([[[[]]]])).toEqual([]);
  });

  test('handles arrays with multiple elements at different levels', () => {
    expect(deepFlattenIterative([1, [2, 3], [4, [5, 6]], 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
