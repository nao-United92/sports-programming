const { once } = require('./function-once-utils');

describe('once', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the original function only once', () => {
    const onceFunc = once(func);
    onceFunc();
    onceFunc();
    onceFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the original function on the first call', () => {
    const onceFunc = once(func);
    onceFunc(1, 'a', true);
    onceFunc(2, 'b', false);
    expect(func).toHaveBeenCalledWith(1, 'a', true);
  });

  test('should return the value from the first invocation on all calls', () => {
    const funcWithReturn = jest.fn((x) => x * 2);
    const onceFunc = once(funcWithReturn);

    const result1 = onceFunc(5);
    const result2 = onceFunc(10);
    const result3 = onceFunc(20);

    expect(result1).toBe(10);
    expect(result2).toBe(10);
    expect(result3).toBe(10);
    expect(funcWithReturn).toHaveBeenCalledTimes(1);
  });

  test('should maintain the `this` context', () => {
    const obj = {
      func: jest.fn(function() { return this; }),
    };
    obj.onceFunc = once(obj.func);

    const context = obj.onceFunc();
    expect(context).toBe(obj);
    expect(obj.func).toHaveBeenCalledTimes(1);
  });

  test('should throw an error if the argument is not a function', () => {
    expect(() => once('not a function')).toThrow('First argument must be a function.');
  });
});