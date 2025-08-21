import { once } from './once-utils.js';

describe('once', () => {
  let func;

  beforeEach(() => {
    func = vi.fn();
  });

  test('should call the original function only once', () => {
    const onceFunc = once(func);
    onceFunc();
    onceFunc();
    onceFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return the value from the first call on subsequent calls', () => {
    const funcWithReturn = vi.fn((a, b) => a + b);
    const onceFunc = once(funcWithReturn);
    const result1 = onceFunc(2, 3);
    const result2 = onceFunc(4, 5);
    const result3 = onceFunc(6, 7);

    expect(funcWithReturn).toHaveBeenCalledTimes(1);
    expect(result1).toBe(5);
    expect(result2).toBe(5);
    expect(result3).toBe(5);
  });

  test('should pass arguments to the original function on the first call', () => {
    const onceFunc = once(func);
    onceFunc('hello', 'world');
    expect(func).toHaveBeenCalledWith('hello', 'world');
  });

  test('should maintain the `this` context', () => {
    const context = { value: 10 };
    const funcWithContext = function() {
      return this.value;
    };
    const onceFunc = once(funcWithContext);

    const result = onceFunc.call(context);
    expect(result).toBe(10);

    // Change context for subsequent call, result should not change
    const newContext = { value: 20 };
    const result2 = onceFunc.call(newContext);
    expect(result2).toBe(10);
  });
});