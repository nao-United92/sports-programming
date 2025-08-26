import { memoize, before, after } from './function-control-utils.js';

describe('memoize', () => {
  it('should cache the result of a function', () => {
    const mockFn = jest.fn((x) => x * 2);
    const memoizedFn = memoize(mockFn);

    memoizedFn(2);
    memoizedFn(2);
    expect(mockFn).toHaveBeenCalledTimes(1);

    memoizedFn(3);
    memoizedFn(3);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should use a resolver function if provided', () => {
    const mockFn = jest.fn((x, y) => x + y);
    const resolver = (x, y) => `${x}-${y}`;
    const memoizedFn = memoize(mockFn, resolver);

    memoizedFn(1, 2);
    memoizedFn(1, 2);
    expect(mockFn).toHaveBeenCalledTimes(1);

    memoizedFn(2, 1);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});

describe('before', () => {
  it('should call the function until the limit is reached', () => {
    const mockFn = jest.fn();
    const limitedFn = before(3, mockFn);
    limitedFn();
    limitedFn();
    limitedFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should return the last result after the limit is reached', () => {
    const mockFn = jest.fn(a => a);
    const limitedFn = before(3, mockFn);
    expect(limitedFn(1)).toBe(1);
    expect(limitedFn(2)).toBe(2);
    expect(limitedFn(3)).toBe(2); // Returns the last result
  });
});

describe('after', () => {
  it('should only call the function after being called n times', () => {
    const mockFn = jest.fn();
    const delayedFn = after(3, mockFn);
    delayedFn();
    delayedFn();
    expect(mockFn).not.toHaveBeenCalled();
    delayedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
    delayedFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
