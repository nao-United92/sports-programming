import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  test('should cache the result of a function', () => {
    const mockFunc = jest.fn((a, b) => a + b);
    const memoizedFunc = memoize(mockFunc);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(mockFunc).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(mockFunc).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedFunc(2, 3)).toBe(5);
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });

  test('should handle different arguments correctly', () => {
    const mockFunc = jest.fn((a, b) => `${a}-${b}`);
    const memoizedFunc = memoize(mockFunc);

    expect(memoizedFunc('a', 'b')).toBe('a-b');
    expect(memoizedFunc('c', 'd')).toBe('c-d');
    expect(memoizedFunc('a', 'b')).toBe('a-b');

    expect(mockFunc).toHaveBeenCalledTimes(2);
  });
});
