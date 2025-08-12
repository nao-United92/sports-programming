import { memoize } from './memoize-practice.js';

describe('memoize', () => {
  it('should memoize the result of a function', () => {
    const mockFn = jest.fn((x) => x * 2);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(2)).toBe(4);
    expect(memoizedFn(2)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(3)).toBe(6);
    expect(memoizedFn(3)).toBe(6);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should handle multiple arguments', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should differentiate arguments', () => {
    const mockFn = jest.fn((a, b) => a - b);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(5, 3)).toBe(2);
    expect(memoizedFn(5, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
