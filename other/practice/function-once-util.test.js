const once = require('./function-once-util');

describe('once', () => {
  let func;
  let onceFunc;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
    onceFunc = once(func);
  });

  it('should call the function only once', () => {
    onceFunc(1, 2);
    onceFunc(3, 4);
    onceFunc(5, 6);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  it('should return the result of the first call on subsequent calls', () => {
    const result1 = onceFunc(1, 2);
    const result2 = onceFunc(3, 4);
    expect(result1).toBe(3);
    expect(result2).toBe(3);
  });

  it('should maintain the context (this) of the function', () => {
    const context = { value: 0 };
    const funcWithContext = jest.fn(function(val) {
      this.value += val;
      return this.value;
    });
    const onceFuncWithContext = once(funcWithContext);

    onceFuncWithContext.call(context, 10);
    expect(context.value).toBe(10);
    onceFuncWithContext.call(context, 20); // Should not modify context again
    expect(context.value).toBe(10);
    expect(funcWithContext).toHaveBeenCalledTimes(1);
  });
});
