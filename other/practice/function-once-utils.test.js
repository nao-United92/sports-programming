const { once } = require('./function-once-utils.js');

describe('once', () => {
  let mockFn;
  let onceFn;

  beforeEach(() => {
    mockFn = jest.fn((x) => x * 2);
    onceFn = once(mockFn);
  });

  it('should call the function only once', () => {
    onceFn(5);
    onceFn(10);
    onceFn(15);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call for subsequent calls', () => {
    const result1 = onceFn(5);
    const result2 = onceFn(10);
    const result3 = onceFn(15);
    expect(result1).toBe(10);
    expect(result2).toBe(10);
    expect(result3).toBe(10);
  });

  it('should pass arguments to the underlying function only on the first call', () => {
    onceFn(5);
    expect(mockFn).toHaveBeenCalledWith(5);
  });

  it('should maintain `this` context for the initial call', () => {
    const obj = {
      value: 10,
      getValue: function() { return this.value; }
    };
    const onceGetVal = once(obj.getValue);
    const result = onceGetVal.call(obj);
    expect(result).toBe(10);
  });
});