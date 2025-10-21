const { once } = require('./event-once-utils');

describe('once', () => {
  let func;
  let onceFunc;

  beforeEach(() => {
    func = jest.fn((x) => x * 2);
    onceFunc = once(func);
  });

  it('should call the original function only once', () => {
    onceFunc(1);
    onceFunc(2);
    onceFunc(3);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);
  });

  it('should return the result of the first call on subsequent calls', () => {
    const result1 = onceFunc(5);
    const result2 = onceFunc(10);
    const result3 = onceFunc(15);

    expect(result1).toBe(10);
    expect(result2).toBe(10);
    expect(result3).toBe(10);
  });

  it('should pass arguments and context correctly on the first call', () => {
    const context = { multiplier: 3 };
    const originalFunc = jest.fn(function(x) {
      return x * this.multiplier;
    });
    const onceOriginalFunc = once(originalFunc);

    const result = onceOriginalFunc.call(context, 2);

    expect(originalFunc).toHaveBeenCalledTimes(1);
    expect(originalFunc).toHaveBeenCalledWith(2);
    expect(originalFunc).toHaveBeenCalledOnLastCallWith(2);
    expect(result).toBe(6);

    // Subsequent calls should not change the result or call count
    const result2 = onceOriginalFunc.call({ multiplier: 10 }, 100);
    expect(originalFunc).toHaveBeenCalledTimes(1);
    expect(result2).toBe(6);
  });

  it('should work with functions that return undefined', () => {
    const undefinedFunc = jest.fn(() => undefined);
    const onceUndefinedFunc = once(undefinedFunc);

    expect(onceUndefinedFunc()).toBeUndefined();
    expect(onceUndefinedFunc()).toBeUndefined();
    expect(undefinedFunc).toHaveBeenCalledTimes(1);
  });

  it('should work with functions that return null', () => {
    const nullFunc = jest.fn(() => null);
    const onceNullFunc = once(nullFunc);

    expect(onceNullFunc()).toBeNull();
    expect(onceNullFunc()).toBeNull();
    expect(nullFunc).toHaveBeenCalledTimes(1);
  });
});
