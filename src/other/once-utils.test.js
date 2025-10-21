import { once } from './once-utils';

describe('once', () => {
  it('should only invoke the function once', () => {
    const myFn = jest.fn();
    const onceFn = once(myFn);

    onceFn();
    onceFn();
    onceFn();

    expect(myFn).toHaveBeenCalledTimes(1);
  });

  it('should return the value of the first invocation', () => {
    let i = 1;
    const onceFn = once(() => i++);

    const val1 = onceFn();
    const val2 = onceFn();
    const val3 = onceFn();

    expect(val1).toBe(1);
    expect(val2).toBe(1);
    expect(val3).toBe(1);
  });

  it('should pass arguments to the original function', () => {
    const myFn = jest.fn((a, b) => a + b);
    const onceFn = once(myFn);

    const result = onceFn(3, 5);

    expect(myFn).toHaveBeenCalledWith(3, 5);
    expect(result).toBe(8);

    // Subsequent calls should not call the original function again
    onceFn(1, 2);
    expect(myFn).toHaveBeenCalledTimes(1);
  });

  it('should maintain the correct `this` context', () => {
    const context = {
      val: 10,
      method: function() {
        return this.val;
      }
    };

    const onceMethod = once(context.method);
    context.onceMethod = onceMethod;

    const result = context.onceMethod();
    expect(result).toBe(10);
  });
});