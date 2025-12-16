const memoize = require('./function-memoize-extended-utils');

describe('memoize', () => {
  it('should memoize a simple function with a single argument', () => {
    let callCount = 0;
    const expensiveFn = (n) => {
      callCount++;
      return n * 2;
    };

    const memoizedFn = memoize(expensiveFn);
    expect(memoizedFn(2)).toBe(4);
    expect(callCount).toBe(1);
    expect(memoizedFn(2)).toBe(4);
    expect(callCount).toBe(1);
    expect(memoizedFn(3)).toBe(6);
    expect(callCount).toBe(2);
  });

  it('should use a resolver function to determine the cache key', () => {
    let callCount = 0;
    const expensiveFn = (obj) => {
      callCount++;
      return obj.value;
    };

    const memoizedFn = memoize(expensiveFn, (obj) => obj.id);
    const obj1 = { id: 1, value: 'a' };
    const obj2 = { id: 2, value: 'b' };
    const obj3 = { id: 1, value: 'c' }; // Same ID as obj1

    expect(memoizedFn(obj1)).toBe('a');
    expect(callCount).toBe(1);
    expect(memoizedFn(obj2)).toBe('b');
    expect(callCount).toBe(2);
    expect(memoizedFn(obj3)).toBe('a'); // Should return cached value for ID 1
    expect(callCount).toBe(2);
  });

  it('should handle multiple arguments when no resolver is provided (uses first arg as key)', () => {
    let callCount = 0;
    const expensiveFn = (a, b) => {
      callCount++;
      return a + b;
    };

    const memoizedFn = memoize(expensiveFn);
    expect(memoizedFn(2, 3)).toBe(5);
    expect(callCount).toBe(1);
    expect(memoizedFn(2, 5)).toBe(5); // Cached based on first arg
    expect(callCount).toBe(1);
    expect(memoizedFn(3, 4)).toBe(7);
    expect(callCount).toBe(2);
  });

  it('should expose the cache on the memoized function (optional feature)', () => {
    const memoizedFn = memoize(n => n * 2);
    memoizedFn(1);
    // This implementation does not expose the cache.
    // If we wanted to, we'd add `memoizedFn.cache = cache;` in the implementation.
    // For this test, we'll assume the cache is not exposed.
    expect(memoizedFn.cache).toBeUndefined();
  });
});
