import { memoize, memoizeWith } from './memoize-utils';

describe('memoize', () => {
  let func;
  let memoizedFunc;

  beforeEach(() => {
    func = jest.fn(x => x * 2);
    memoizedFunc = memoize(func);
  });

  test('should call the original function only once for the same arguments', () => {
    memoizedFunc(1);
    memoizedFunc(1);
    memoizedFunc(2);
    memoizedFunc(2);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should return the cached result for the same arguments', () => {
    const result1 = memoizedFunc(1);
    const result2 = memoizedFunc(1);
    expect(result1).toBe(2);
    expect(result2).toBe(2);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the original function for different arguments', () => {
    memoizedFunc(1);
    memoizedFunc(2);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should handle multiple arguments', () => {
    func = jest.fn((a, b) => a + b);
    memoizedFunc = memoize(func);

    memoizedFunc(1, 2);
    memoizedFunc(1, 2);
    memoizedFunc(2, 1);

    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledWith(2, 1);
  });

  
});

describe('memoizeWith', () => {
  let func;
  let memoizedFunc;
  let resolver;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
    resolver = jest.fn((a, b) => `${a}-${b}`);
    memoizedFunc = memoizeWith(func, resolver);
  });

  test('should call the original function only once for the same resolved key', () => {
    memoizedFunc(1, 2);
    memoizedFunc(1, 2);
    memoizedFunc(3, 4);
    memoizedFunc(3, 4);

    expect(resolver).toHaveBeenCalledTimes(4);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should return the cached result for the same resolved key', () => {
    const result1 = memoizedFunc(1, 2);
    const result2 = memoizedFunc(1, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the original function for different resolved keys', () => {
    memoizedFunc(1, 2);
    memoizedFunc(2, 1); // Different key if resolver is `(a,b) => `${a}-${b}``

    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass correct arguments and context to resolver and func', () => {
    const context = { id: 1 };
    memoizedFunc.apply(context, [10, 20]);

    expect(resolver).toHaveBeenCalledWith(10, 20);
    expect(resolver).toHaveBeenCalledOnLastCallWith(10, 20);
    expect(resolver.mock.contexts[0]).toBe(context);

    expect(func).toHaveBeenCalledWith(10, 20);
    expect(func).toHaveBeenCalledOnLastCallWith(10, 20);
    expect(func.mock.contexts[0]).toBe(context);
  });
});
