import { once } from './once-utils';

describe('once', () => {
  let func;

  beforeEach(() => {
    func = jest.fn((x) => x * 2);
  });

  test('should call the function only once', () => {
    const onceFunc = once(func);
    onceFunc(1);
    onceFunc(2);
    onceFunc(3);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);
  });

  test('should return the result of the first invocation on subsequent calls', () => {
    const onceFunc = once(func);
    const result1 = onceFunc(5);
    const result2 = onceFunc(10);
    const result3 = onceFunc(15);

    expect(result1).toBe(10);
    expect(result2).toBe(10);
    expect(result3).toBe(10);
  });

  test('should preserve the context (this binding)', () => {
    const onceFunc = once(function(value) {
      this.count = (this.count || 0) + value;
      return this.count;
    });

    const context = {};
    const result1 = onceFunc.call(context, 1);
    const result2 = onceFunc.call(context, 2);

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(context.count).toBe(1);
  });

  test('should work correctly with no arguments', () => {
    const noArgFunc = jest.fn(() => 'hello');
    const onceNoArgFunc = once(noArgFunc);

    const result1 = onceNoArgFunc();
    const result2 = onceNoArgFunc();

    expect(noArgFunc).toHaveBeenCalledTimes(1);
    expect(result1).toBe('hello');
    expect(result2).toBe('hello');
  });
});