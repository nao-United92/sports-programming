import { once } from './once-utils.js';

describe('once', () => {
  it('should only call the function once', () => {
    const myFn = jest.fn();
    const onceFn = once(myFn);

    onceFn();
    onceFn();
    onceFn();

    expect(myFn).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call', () => {
    let i = 1;
    const onceFn = once(() => i++);

    const result1 = onceFn();
    const result2 = onceFn();
    const result3 = onceFn();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  it('should pass arguments to the original function', () => {
    const myFn = jest.fn();
    const onceFn = once(myFn);

    onceFn(1, 2, 3);
    onceFn(4, 5, 6);

    expect(myFn).toHaveBeenCalledWith(1, 2, 3);
    expect(myFn).not.toHaveBeenCalledWith(4, 5, 6);
  });

  it('should maintain the `this` context', () => {
    const myFn = jest.fn(function() { return this.value; });
    const context = {
      value: 10,
      onceFn: once(myFn)
    };

    const result = context.onceFn();
    expect(result).toBe(10);
    expect(myFn).toHaveBeenCalledTimes(1);

    context.value = 20;
    const result2 = context.onceFn();
    expect(result2).toBe(10); // Still the first result
    expect(myFn).toHaveBeenCalledTimes(1);
  });
});