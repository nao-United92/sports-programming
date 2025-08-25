import { once } from './function-once-utils.js';

describe('once', () => {
  test('should call the function only once', () => {
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
    expect(mockFn).toHaveBeenCalledWith(5);
  });

  test('should pass arguments correctly on the first call', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn(1, 2, 3);

    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  });

  test('should maintain the correct context', () => {
    const mockFn = jest.fn(function() { return this.value; });
    const onceFn = once(mockFn);

    const context = { value: 'test' };
    const result = onceFn.call(context);

    expect(result).toBe('test');
    expect(mockFn).toHaveBeenCalledOnLastCallWith();
    expect(mockFn.mock.contexts[0]).toBe(context);
  });
});