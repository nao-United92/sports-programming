import { memoize } from './memoize-utils';

describe('memoize', () => {
  it('should memoize a simple function', () => {
    let callCount = 0;
    const expensiveFunction = (x) => {
      callCount++;
      return x * 2;
    };

    const memoizedFn = memoize(expensiveFunction);

    expect(memoizedFn(2)).toBe(4);
    expect(callCount).toBe(1);

    expect(memoizedFn(2)).toBe(4);
    expect(callCount).toBe(1); // Should not be called again

    expect(memoizedFn(3)).toBe(6);
    expect(callCount).toBe(2);

    expect(memoizedFn(3)).toBe(6);
    expect(callCount).toBe(2); // Should not be called again
  });

  it('should use a resolver function for cache key', () => {
    let callCount = 0;
    const expensiveFunction = (obj) => {
      callCount++;
      return obj.a + obj.b;
    };

    const resolver = (obj) => JSON.stringify(obj);
    const memoizedFn = memoize(expensiveFunction, resolver);

    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 }; // Same values, different object
    const obj3 = { a: 2, b: 3 };

    expect(memoizedFn(obj1)).toBe(3);
    expect(callCount).toBe(1);

    expect(memoizedFn(obj2)).toBe(3);
    expect(callCount).toBe(1); // Should use cache thanks to resolver

    expect(memoizedFn(obj3)).toBe(5);
    expect(callCount).toBe(2);
  });

  it('should expose the cache on the memoized function', () => {
    const memoizedFn = memoize((a) => a);
    memoizedFn('a');
    expect(memoizedFn.cache.has('a')).toBe(true);
    expect(memoizedFn.cache.get('a')).toBe('a');
  });

  it('should handle context correctly', () => {
    const context = {
      multiplier: 10,
      method: function(val) {
        return this.multiplier * val;
      }
    };

    context.memoizedMethod = memoize(context.method);

    expect(context.memoizedMethod(2)).toBe(20);
    // Memoization doesn't automatically bind context, the caller must.
    // Let's test it bound
    const boundMemoized = memoize(context.method.bind(context));
    expect(boundMemoized(3)).toBe(30);
    expect(boundMemoized(3)).toBe(30);
  });
});
