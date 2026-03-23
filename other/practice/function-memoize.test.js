import { memoize } from './function-memoize.js';

describe('memoize', () => {
  test('should memoize function results', () => {
    const add = jest.fn((a, b) => a + b);
    const memoizedAdd = memoize(add);

    expect(memoizedAdd(1, 2)).toBe(3);
    expect(memoizedAdd(1, 2)).toBe(3);
    expect(add).toHaveBeenCalledTimes(1);
  });

  test('should handle different arguments', () => {
    const add = jest.fn((a, b) => a + b);
    const memoizedAdd = memoize(add);

    expect(memoizedAdd(1, 2)).toBe(3);
    expect(memoizedAdd(2, 3)).toBe(5);
    expect(add).toHaveBeenCalledTimes(2);
  });
});
