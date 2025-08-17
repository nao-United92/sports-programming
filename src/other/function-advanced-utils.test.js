import { once, after } from './function-advanced-utils.js';

describe('once', () => {
  test('should only invoke the function once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first invocation', () => {
    const mockFn = jest.fn(() => 'result');
    const onceFn = once(mockFn);

    const result1 = onceFn();
    const result2 = onceFn();

    expect(result1).toBe('result');
    expect(result2).toBe('result');
  });
});

describe('after', () => {
  test('should only invoke the function after n calls', () => {
    const mockFn = jest.fn();
    const afterFn = after(3, mockFn);

    afterFn();
    afterFn();
    expect(mockFn).not.toHaveBeenCalled();

    afterFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    afterFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
