const { memoize } = require('./memoize-utils.js');

describe('memoize', () => {
  it('should return the correct result from a memoized function', () => {
    const add = (a, b) => a + b;
    const memoizedAdd = memoize(add);
    expect(memoizedAdd(2, 3)).toBe(5);
    expect(memoizedAdd(5, 5)).toBe(10);
  });

  it('should call the original function only once for the same set of arguments', () => {
    const expensiveFunc = jest.fn((a, b) => a * b);
    const memoizedFunc = memoize(expensiveFunc);

    memoizedFunc(2, 3);
    memoizedFunc(2, 3);
    memoizedFunc(2, 3);

    expect(expensiveFunc).toHaveBeenCalledTimes(1);
  });

  it('should return the cached result on subsequent calls', () => {
    const expensiveFunc = jest.fn(() => Math.random());
    const memoizedFunc = memoize(expensiveFunc);

    const firstResult = memoizedFunc();
    const secondResult = memoizedFunc();

    expect(expensiveFunc).toHaveBeenCalledTimes(1);
    expect(secondResult).toBe(firstResult);
  });

  it('should call the original function again for different arguments', () => {
    const expensiveFunc = jest.fn((a, b) => a + b);
    const memoizedFunc = memoize(expensiveFunc);

    memoizedFunc(1, 2); // Call 1
    memoizedFunc(2, 3); // Call 2
    memoizedFunc(1, 2); // Cached

    expect(expensiveFunc).toHaveBeenCalledTimes(2);
  });

  it('should use a custom resolver function to generate cache keys', () => {
    const expensiveFunc = jest.fn();
    const resolver = (obj) => obj.id;
    const memoizedFunc = memoize(expensiveFunc, resolver);

    memoizedFunc({ id: 1, data: 'a' }); // Call 1
    memoizedFunc({ id: 1, data: 'b' }); // Cached, resolver returns the same key
    memoizedFunc({ id: 2, data: 'c' }); // Call 2

    expect(expensiveFunc).toHaveBeenCalledTimes(2);
  });

  it('should expose the cache on the memoized function', () => {
    const memoizedFunc = memoize((a) => a);
    memoizedFunc(1);
    expect(memoizedFunc.cache.size).toBe(1);
    expect(memoizedFunc.cache.has('[1]')).toBe(true);
  });
});
