import { delay } from './delay-utils.js';

describe('delay', () => {
  jest.useFakeTimers();

  it('should delay the execution of a function', () => {
    const func = jest.fn();
    delay(func, 1000);

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the delayed function', () => {
    const func = jest.fn();
    delay(func, 1000, 1, 'test');

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should return a timer id', () => {
    const func = () => {};
    const timerId = delay(func, 1000);
    expect(typeof timerId).toBe('number');
    clearTimeout(timerId);
  });
});
