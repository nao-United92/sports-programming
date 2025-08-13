import { once } from './function-once-utils';

describe('once', () => {
  test('should call the original function only once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first call on subsequent calls', () => {
    const mockFn = jest.fn((x) => x * 2);
    const onceFn = once(mockFn);

    const result1 = onceFn(5);
    const result2 = onceFn(10);
    const result3 = onceFn(20);

    expect(result1).toBe(10);
    expect(result2).toBe(10);
    expect(result3).toBe(10);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(5);
  });

  test('should preserve the context (this) of the original function', () => {
    const mockFn = jest.fn(function() { return this.value; });
    const onceFn = once(mockFn);

    const context = { value: 42 };
    const result1 = onceFn.call(context);
    const result2 = onceFn.call({ value: 100 }); // Different context

    expect(result1).toBe(42);
    expect(result2).toBe(42);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(); // No arguments passed
  });

  test('should handle functions with no return value', () => {
    const mockFn = jest.fn(() => {});
    const onceFn = once(mockFn);

    const result1 = onceFn();
    const result2 = onceFn();

    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should handle functions that throw errors', () => {
    const mockFn = jest.fn(() => { throw new Error('Test Error'); });
    const onceFn = once(mockFn);

    expect(() => onceFn()).toThrow('Test Error');
    // Subsequent calls should return the same error or result from the first call
    // Depending on desired behavior, this might need adjustment. For now, it should re-throw.
    expect(() => onceFn()).toThrow('Test Error');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
