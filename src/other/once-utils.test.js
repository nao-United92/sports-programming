import { once } from './once-utils.js';

describe('once', () => {
  it('should only invoke the function once', () => {
    const func = jest.fn();
    const onceFunc = once(func);

    onceFunc();
    onceFunc();
    onceFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should return the value from the first invocation', () => {
    let i = 0;
    const onceFunc = once(() => ++i);

    const result1 = onceFunc();
    const result2 = onceFunc();
    const result3 = onceFunc();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  it('should pass arguments to the original function', () => {
    const func = jest.fn();
    const onceFunc = once(func);

    onceFunc(1, 2, 3);
    onceFunc(4, 5, 6);

    expect(func).toHaveBeenCalledWith(1, 2, 3);
    expect(func).not.toHaveBeenCalledWith(4, 5, 6);
  });

  it('should maintain the `this` binding', () => {
    const func = jest.fn(function() {
      return this;
    });
    const context = { onceFunc: once(func) };

    const result = context.onceFunc();

    expect(result).toBe(context);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should throw a TypeError if not passed a function', () => {
    expect(() => once(123)).toThrow(TypeError);
    expect(() => once(null)).toThrow(TypeError);
    expect(() => once({})).toThrow(TypeError);
  });
});