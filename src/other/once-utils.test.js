import { once } from './once-utils.js';

describe('once', () => {
  it('should only call the function once', () => {
    const func = jest.fn();
    const onceFunc = once(func);
    onceFunc();
    onceFunc();
    onceFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call', () => {
    let i = 0;
    const func = () => ++i;
    const onceFunc = once(func);
    const result1 = onceFunc();
    const result2 = onceFunc();
    expect(result1).toBe(1);
    expect(result2).toBe(1);
  });
});
