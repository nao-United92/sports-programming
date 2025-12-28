const { once } = require('./function-once-utils');

describe('once', () => {
  it('should only call the original function once', () => {
    const myFn = jest.fn();
    const onceFn = once(myFn);

    onceFn();
    onceFn();
    onceFn();

    expect(myFn).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call for all subsequent calls', () => {
    let i = 0;
    const onceFn = once(() => ++i);

    const result1 = onceFn();
    const result2 = onceFn();
    const result3 = onceFn();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  it('should pass arguments to the original function', () => {
    const myFn = jest.fn((a, b) => a + b);
    const onceFn = once(myFn);

    const result = onceFn(5, 10);

    expect(myFn).toHaveBeenCalledWith(5, 10);
    expect(result).toBe(15);
  });
  
  it('subsequent calls with different arguments should not change the result', () => {
    const myFn = jest.fn((a, b) => a + b);
    const onceFn = once(myFn);

    const result1 = onceFn(5, 10);
    const result2 = onceFn(1, 2); // These arguments should be ignored

    expect(myFn).toHaveBeenCalledTimes(1);
    expect(myFn).toHaveBeenCalledWith(5, 10);
    expect(result1).toBe(15);
    expect(result2).toBe(15);
  });
});
