import { memoizeWith } from './memoize-with-practice.js';

describe('memoizeWith', () => {
  it('should memoize the result of a function using a custom resolver', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const resolver = (a, b) => `${a}-${b}`; // Custom key generation
    const memoizedFn = memoizeWith(resolver, mockFn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(2, 1)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(2); // Different key, so called again
  });

  it('should maintain the context', () => {
    const mockFn = jest.fn(function(a) {
      return this.value + a;
    });
    const resolver = function(a) {
      return `${this.value}-${a}`;
    };
    const context = { value: 10, memoizedFn: memoizeWith(resolver, mockFn) };

    expect(context.memoizedFn(5)).toBe(15);
    expect(context.memoizedFn(5)).toBe(15);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should handle resolver returning non-string keys', () => {
    const mockFn = jest.fn((obj) => obj.id);
    const resolver = (obj) => obj; // Use object itself as key
    const memoizedFn = memoizeWith(resolver, mockFn);

    const obj1 = { id: 1 };
    const obj2 = { id: 2 };

    expect(memoizedFn(obj1)).toBe(1);
    expect(memoizedFn(obj1)).toBe(1);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(obj2)).toBe(2);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
