const { memoize } = require('./function-result-cacher');

describe('memoize', () => {
  let heavyComputation;
  let memoizedComputation;

  beforeEach(() => {
    heavyComputation = jest.fn((a, b) => {
      // Simulate heavy computation
      return a + b;
    });
    memoizedComputation = memoize(heavyComputation);
  });

  it('should call the original function only once for the same arguments', () => {
    memoizedComputation(1, 2);
    memoizedComputation(1, 2);
    memoizedComputation(1, 2);

    expect(heavyComputation).toHaveBeenCalledTimes(1);
    expect(memoizedComputation(1, 2)).toBe(3);
  });

  it('should call the original function for different arguments', () => {
    memoizedComputation(1, 2);
    memoizedComputation(3, 4);

    expect(heavyComputation).toHaveBeenCalledTimes(2);
    expect(memoizedComputation(1, 2)).toBe(3);
    expect(memoizedComputation(3, 4)).toBe(7);
  });

  it('should cache results for multiple arguments', () => {
    memoizedComputation(1, 2);
    memoizedComputation(1, 3);
    memoizedComputation(1, 2); // Should be cached

    expect(heavyComputation).toHaveBeenCalledTimes(2); // (1,2) and (1,3)
    expect(memoizedComputation(1, 3)).toBe(4); // (1,3) should be cached now
    expect(heavyComputation).toHaveBeenCalledTimes(2);
  });

  it('should handle different argument types', () => {
    memoizedComputation('a', 'b');
    memoizedComputation('a', 'b');
    memoizedComputation(1, 'b');

    expect(heavyComputation).toHaveBeenCalledTimes(2);
    expect(memoizedComputation('a', 'b')).toBe('ab');
    expect(memoizedComputation(1, 'b')).toBe('1b');
  });

  it('should work with no arguments', () => {
    const noArgFunc = jest.fn(() => 'result');
    const memoizedNoArgFunc = memoize(noArgFunc);

    memoizedNoArgFunc();
    memoizedNoArgFunc();
    expect(noArgFunc).toHaveBeenCalledTimes(1);
    expect(memoizedNoArgFunc()).toBe('result');
  });
});
