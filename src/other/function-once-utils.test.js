import { once } from './function-once-utils';

describe('once', () => {
  let func;
  let onceFunc;

  beforeEach(() => {
    func = jest.fn((x) => x * 2);
  });

  it('should invoke the function only once', () => {
    onceFunc = once(func);

    expect(onceFunc(1)).toBe(2);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    expect(onceFunc(2)).toBe(2); // Subsequent calls return the first result
    expect(func).toHaveBeenCalledTimes(1); // func should not be called again

    expect(onceFunc(3)).toBe(2);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should maintain the `this` context', () => {
    const obj = {
      value: 10,
      getValue: once(function() {
        return this.value;
      }),
    };

    const obj2 = {
      value: 20,
      getValue: obj.getValue,
    };

    expect(obj.getValue()).toBe(10);
    expect(obj.getValue()).toBe(10);
    expect(obj2.getValue()).toBe(10); // The `this` context is bound to the first call
  });

  it('should pass arguments only to the first invocation', () => {
    onceFunc = once(func);

    onceFunc(5);
    expect(func).toHaveBeenCalledWith(5);

    onceFunc(10);
    expect(func).not.toHaveBeenCalledWith(10);
  });

  it('should throw an error if func is not a function', () => {
    expect(() => once(null)).toThrow('Expected a function');
    expect(() => once('not a function')).toThrow('Expected a function');
  });

  it('should return the same result for all subsequent calls', () => {
    let counter = 0;
    const increment = once(() => ++counter);

    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(counter).toBe(1);
  });
});
