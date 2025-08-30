import { once } from './function-once-utils.js';

describe('once', () => {
  it('should invoke the original function only once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should return the value of the first invocation on subsequent calls', () => {
    let counter = 0;
    const func = () => ++counter;
    const onceFn = once(func);

    const firstResult = onceFn();
    const secondResult = onceFn();
    const thirdResult = onceFn();

    expect(firstResult).toBe(1);
    expect(secondResult).toBe(1);
    expect(thirdResult).toBe(1);
  });

  it('should pass arguments to the original function only on the first call', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn(1, 'a', true);
    onceFn(2, 'b', false); // These arguments should be ignored

    expect(mockFn).toHaveBeenCalledWith(1, 'a', true);
    expect(mockFn).not.toHaveBeenCalledWith(2, 'b', false);
  });

  it('should maintain the `this` context of the call', () => {
    const mockFn = jest.fn(function() {
      return this;
    });

    const context = { name: 'test-context' };
    const onceFn = once(mockFn);

    const result = onceFn.call(context);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result).toBe(context);
  });

  it('should return the same result object/array instance', () => {
    const resultObject = { a: 1 };
    const func = () => resultObject;
    const onceFn = once(func);

    expect(onceFn()).toBe(resultObject);
    expect(onceFn()).toBe(resultObject);
  });
});
