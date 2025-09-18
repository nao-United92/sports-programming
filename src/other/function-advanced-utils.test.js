import { once, after, times } from './function-advanced-utils.js';

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

describe('times', () => {
  test('should invoke the iteratee n times', () => {
    const mockIteratee = jest.fn((i) => i * 2);
    const result = times(5, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(5);
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });

  test('should return an empty array if n is 0', () => {
    const mockIteratee = jest.fn();
    const result = times(0, mockIteratee);

    expect(mockIteratee).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  test('should handle negative n by returning an empty array', () => {
    const mockIteratee = jest.fn();
    const result = times(-5, mockIteratee);

    expect(mockIteratee).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  test('should pass the index to the iteratee', () => {
    const mockIteratee = jest.fn((i) => `Item ${i}`);
    times(3, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledWith(0);
    expect(mockIteratee).toHaveBeenCalledWith(1);
    expect(mockIteratee).toHaveBeenCalledWith(2);
  });
});
