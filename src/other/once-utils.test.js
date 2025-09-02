import { once } from './once-utils.js';

describe('once', () => {
  test('should call the original function only once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should return the value from the first call on subsequent calls', () => {
    let i = 0;
    const onceFn = once(() => ++i);

    const firstResult = onceFn();
    const secondResult = onceFn();
    const thirdResult = onceFn();

    expect(firstResult).toBe(1);
    expect(secondResult).toBe(1);
    expect(thirdResult).toBe(1);
  });

  test('should pass arguments to the original function on the first call', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const onceFn = once(mockFn);

    const result = onceFn(3, 5);

    expect(mockFn).toHaveBeenCalledWith(3, 5);
    expect(result).toBe(8);

    // Subsequent call with different args should not affect the result or call the mock again
    const secondResult = onceFn(10, 20);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(secondResult).toBe(8);
  });

  test('should maintain the `this` context', () => {
    const mockFn = jest.fn(function() { return this.value; });
    const context = { value: 'test', onceFn: once(mockFn) };

    const result = context.onceFn();

    expect(result).toBe('test');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
