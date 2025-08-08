import { memoize } from './memoize-utils';

describe('memoize', () => {
  test('should cache function results', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(2, 3)).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('should handle different arguments correctly', () => {
    const mockFn = jest.fn((str) => str.toUpperCase());
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn('hello')).toBe('HELLO');
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn('world')).toBe('WORLD');
    expect(mockFn).toHaveBeenCalledTimes(2);

    expect(memoizedFn('hello')).toBe('HELLO');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
