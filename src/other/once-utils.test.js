import { once } from './once-utils';

describe('once', () => {
  let func;
  let onceFunc;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
    onceFunc = once(func);
  });

  test('should call the function only once', () => {
    onceFunc(1, 2);
    onceFunc(3, 4);
    onceFunc(5, 6);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  test('should return the result of the first invocation for subsequent calls', () => {
    const result1 = onceFunc(1, 2);
    const result2 = onceFunc(3, 4);
    const result3 = onceFunc(5, 6);

    expect(result1).toBe(3);
    expect(result2).toBe(3);
    expect(result3).toBe(3);
  });

  test('should preserve context', () => {
    const context = { multiplier: 10 };
    const funcWithContext = jest.fn(function(a) {
      return a * this.multiplier;
    });
    const onceFuncWithContext = once(funcWithContext);

    const result1 = onceFuncWithContext.call(context, 5);
    expect(result1).toBe(50);
    expect(funcWithContext).toHaveBeenCalledTimes(1);

    const result2 = onceFuncWithContext.call(context, 10);
    expect(result2).toBe(50);
    expect(funcWithContext).toHaveBeenCalledTimes(1);
  });
});
