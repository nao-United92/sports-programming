const { once } = require('./function-once-utils');

describe('once', () => {
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
  });

  it('should call the original function only once', () => {
    const onceFn = once(mockFn);
    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the original function on the first call', () => {
    const onceFn = once(mockFn);
    onceFn(1, 'a', true);

    expect(mockFn).toHaveBeenCalledWith(1, 'a', true);
  });

  it('should return the result of the first call on all subsequent calls', () => {
    const fn = (a, b) => a + b;
    const onceFn = once(fn);

    const result1 = onceFn(3, 4);
    const result2 = onceFn(5, 6); // These arguments should be ignored
    const result3 = onceFn(7, 8); // These arguments should be ignored

    expect(result1).toBe(7);
    expect(result2).toBe(7);
    expect(result3).toBe(7);
  });

  it('should maintain the context (`this`) of the first call', () => {
    const obj = {
      i: 10,
      method: function() {
        return this.i;
      }
    };
    obj.onceMethod = once(obj.method);

    const result = obj.onceMethod();
    expect(result).toBe(10);

    // Even if context changes, the first result is returned
    const otherObj = { i: 20, onceMethod: obj.onceMethod };
    const result2 = otherObj.onceMethod();
    expect(result2).toBe(10);
  });

  it('should work correctly if the original function does not return a value', () => {
    const onceFn = once(mockFn);
    const result1 = onceFn();
    const result2 = onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
  });
});