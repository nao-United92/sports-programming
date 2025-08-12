import { once } from './once-practice.js';

describe('once', () => {
  it('should only call the function once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const onceFn = once(mockFn);

    const result1 = onceFn(1, 2);
    const result2 = onceFn(3, 4);

    expect(result1).toBe(3);
    expect(result2).toBe(3);
  });

  it('should maintain the context of the function', () => {
    const mockFn = jest.fn(function() {
      return this.value;
    });
    const context = { value: 10, onceFn: once(mockFn) };

    const result = context.onceFn();

    expect(result).toBe(10);
  });
});
