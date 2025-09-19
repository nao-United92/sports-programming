import { once } from './function-once-utils.js';

describe('once', () => {
  test('should invoke the original function only once', () => {
    const func = jest.fn();
    const onceFunc = once(func);

    onceFunc();
    onceFunc();
    onceFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return the value from the first invocation on subsequent calls', () => {
    let count = 0;
    const func = () => ++count;
    const onceFunc = once(func);

    const result1 = onceFunc();
    const result2 = onceFunc();
    const result3 = onceFunc();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  test('should pass arguments to the original function on the first call', () => {
    const func = jest.fn((a, b) => a + b);
    const onceFunc = once(func);

    const result = onceFunc(3, 4);

    expect(func).toHaveBeenCalledWith(3, 4);
    expect(result).toBe(7);
  });

  test('should maintain the context ('this') of the first call', () => {
    const func = jest.fn(function() { return this.value; });
    const onceFunc = once(func);
    const context = { value: 'test', onceFunc };

    const result = context.onceFunc();

    expect(func).toHaveBeenCalledTimes(1);
    expect(result).toBe('test');
  });
});