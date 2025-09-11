import { once } from './once-utils';

describe('once', () => {
  it('should only invoke the function once', () => {
    const func = jest.fn();
    const initialize = once(func);

    initialize();
    initialize();
    initialize();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should return the same value every time', () => {
    let counter = 0;
    const func = () => ++counter;
    const onceFunc = once(func);

    const firstResult = onceFunc();
    const secondResult = onceFunc();

    expect(firstResult).toBe(1);
    expect(secondResult).toBe(1);
  });

  it('should pass arguments to the original function on the first call', () => {
    const func = jest.fn((a, b) => a + b);
    const onceFunc = once(func);

    const result = onceFunc(3, 4);

    expect(result).toBe(7);
    expect(func).toHaveBeenCalledWith(3, 4);

    // Subsequent calls should not invoke the function again
    onceFunc(5, 6);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should maintain the `this` context', () => {
    const func = jest.fn(function() {
      return this.value;
    });

    const context = { value: 'test', onceFunc: once(func) };
    const result = context.onceFunc();

    expect(result).toBe('test');
    expect(func).toHaveBeenCalledTimes(1);

    // Change context value and see that the result is still the original
    context.value = 'new-test';
    const secondResult = context.onceFunc();
    expect(secondResult).toBe('test');
  });
});
