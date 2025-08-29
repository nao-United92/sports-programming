import { once } from './once-utils.js';

describe('once', () => {
  it('should only call the original function once', () => {
    const func = jest.fn();
    const onceFunc = once(func);

    onceFunc();
    onceFunc();
    onceFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call on subsequent calls', () => {
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

    expect(func).toHaveBeenCalledWith(1, 2, 3);
  });

  it('should maintain the context of the original function', () => {
    const func = jest.fn();
    const onceFunc = once(func);
    const context = { onceFunc };

    context.onceFunc();

    expect(func.mock.contexts[0]).toBe(context);
  });
});
