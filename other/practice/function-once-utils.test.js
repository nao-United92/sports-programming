import { once } from './function-once-utils.js';

describe('once', () => {
  it('should only call the original function once', () => {
    const func = jest.fn();
    const onceFunc = once(func);

    onceFunc();
    onceFunc();
    onceFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should return the value from the first call', () => {
    let i = 0;
    const func = () => ++i;
    const onceFunc = once(func);

    const result1 = onceFunc();
    const result2 = onceFunc();
    const result3 = onceFunc();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  it('should pass arguments to the original function', () => {
    const func = jest.fn();
    const onceFunc = once(func);

    onceFunc(1, 2, 3);
    onceFunc(4, 5, 6);

    expect(func).toHaveBeenCalledWith(1, 2, 3);
    expect(func).not.toHaveBeenCalledWith(4, 5, 6);
  });
});
