const memoize = require('./function-memoize-util');

describe('memoize', () => {
  let func;
  let memoizedFunc;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
    memoizedFunc = memoize(func);
  });

  it('should call the original function and cache its result', () => {
    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  it('should return cached result for same arguments without calling original function', () => {
    memoizedFunc(1, 2);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1); // Should not be called again
  });

  it('should call original function for different arguments', () => {
    memoizedFunc(1, 2);
    expect(func).toHaveBeenCalledTimes(1);

    memoizedFunc(3, 4);
    expect(func).toHaveBeenCalledTimes(2); // Called for new arguments
  });

  it('should use a resolver function to generate cache key', () => {
    const resolver = (a, b) => `${a}-${b}`;
    const memoizedFuncWithResolver = memoize(func, resolver);

    memoizedFuncWithResolver(1, 2);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(memoizedFuncWithResolver.cache.has('1-2')).toBe(true);

    memoizedFuncWithResolver(1, 2);
    expect(func).toHaveBeenCalledTimes(1); // Not called again due to resolver
  });

  it('should maintain the context (this) of the function', () => {
    const context = { multiplier: 10 };
    const funcWithContext = jest.fn(function(a) {
      return a * this.multiplier;
    });
    const memoizedFuncWithContext = memoize(funcWithContext);

    expect(memoizedFuncWithContext.call(context, 5)).toBe(50);
    expect(funcWithContext).toHaveBeenCalledTimes(1);
    expect(funcWithContext).toHaveBeenCalledWith(5);
    expect(funcWithContext.mock.contexts[0]).toBe(context); // Verify context

    // Call again, should use cache, context shouldn't matter for funcWithContext call count
    expect(memoizedFuncWithContext.call(context, 5)).toBe(50);
    expect(funcWithContext).toHaveBeenCalledTimes(1);
  });

  it('should work with a resolver function and context', () => {
    const context = { prefix: 'val_' };
    const funcWithContextAndResolver = jest.fn(function(id) {
      return this.prefix + id;
    });
    const resolver = (id) => `key-${id}`;
    const memoizedFunc = memoize(funcWithContextAndResolver, resolver);

    expect(memoizedFunc.call(context, 1)).toBe('val_1');
    expect(funcWithContextAndResolver).toHaveBeenCalledTimes(1);
    expect(funcWithContextAndResolver.mock.contexts[0]).toBe(context);
    expect(memoizedFunc.cache.has('key-1')).toBe(true);

    expect(memoizedFunc.call(context, 1)).toBe('val_1');
    expect(funcWithContextAndResolver).toHaveBeenCalledTimes(1);
  });
});
