import { once } from './once-utils';

describe('once', () => {
  it('should only call the function once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the original function', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn(1, 2, 3);

    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  });

  it('should return the result of the first call', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const onceFn = once(mockFn);

    const result1 = onceFn(2, 3);
    const result2 = onceFn(4, 5);

    expect(result1).toBe(5);
    expect(result2).toBe(5);
  });

  it('should maintain the `this` context', () => {
    const obj = {
      mockFn: jest.fn(function() {
        return this;
      }),
    };
    obj.onceFn = once(obj.mockFn);

    const context = obj.onceFn();

    expect(context).toBe(obj);
    expect(obj.mockFn).toHaveBeenCalledTimes(1);
  });
});
