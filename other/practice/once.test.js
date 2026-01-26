const { once } = require('./once');

describe('once', () => {
  let func;
  let onceFunc;

  beforeEach(() => {
    func = jest.fn((x) => x * 2);
    onceFunc = once(func);
  });

  test('should call the function only once', () => {
    onceFunc(1);
    onceFunc(2);
    onceFunc(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first call for subsequent calls', () => {
    const result1 = onceFunc(10);
    const result2 = onceFunc(20);
    expect(result1).toBe(20);
    expect(result2).toBe(20);
    expect(func).toHaveBeenCalledWith(10);
  });

  test('should preserve the context (this) of the original function', () => {
    const context = { value: 5 };
    const funcWithContext = jest.fn(function(x) {
      this.value += x;
      return this.value;
    });
    const onceFuncWithContext = once(funcWithContext);

    onceFuncWithContext.call(context, 5);
    onceFuncWithContext.call(context, 10);

    expect(funcWithContext).toHaveBeenCalledTimes(1);
    expect(context.value).toBe(10); // 5 (initial) + 5 (first call)
  });

  test('should work with no arguments', () => {
    const noArgFunc = jest.fn(() => 'hello');
    const onceNoArgFunc = once(noArgFunc);
    onceNoArgFunc();
    onceNoArgFunc();
    expect(noArgFunc).toHaveBeenCalledTimes(1);
    expect(onceNoArgFunc()).toBe('hello');
  });
});
