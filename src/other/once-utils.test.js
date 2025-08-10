import { once } from './once-utils';

describe('once', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the original function only once', () => {
    const onceFunc = once(func);
    onceFunc();
    onceFunc();
    onceFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first call on subsequent calls', () => {
    let i = 0;
    const funcWithReturnValue = () => {
      i++;
      return i;
    };
    const onceFunc = once(funcWithReturnValue);
    const result1 = onceFunc();
    const result2 = onceFunc();
    const result3 = onceFunc();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  test('should pass arguments to the original function', () => {
    const onceFunc = once(func);
    onceFunc(1, 'a');
    expect(func).toHaveBeenCalledWith(1, 'a');
  });

  test('should maintain the correct context', () => {
    const context = { value: 42 };
    const funcInContext = jest.fn(function() {
      return this.value;
    });

    const onceFunc = once(funcInContext);
    const result = onceFunc.call(context);

    expect(funcInContext).toHaveBeenCalledTimes(1);
    expect(funcInContext.mock.contexts[0]).toBe(context);
    expect(result).toBe(42);

    // Subsequent call to check context and return value
    const result2 = onceFunc.call({ value: 99 });
    expect(funcInContext).toHaveBeenCalledTimes(1); // Still 1
    expect(result2).toBe(42); // Returns original result
  });
});