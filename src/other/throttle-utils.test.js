import { throttle } from './throttle-utils.js';

// Mock setTimeout and clearTimeout to control time in tests
jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function immediately on the first call', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the delay period', () => {
    const throttled = throttle(func, 100);
    throttled();
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the delay has passed', () => {
    const throttled = throttle(func, 100);
    throttled(); // First call
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time by 100ms
    jest.advanceTimersByTime(100);
    throttled(); // Should be called again
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the trailing edge call', () => {
    const throttled = throttle(func, 100);
    throttled(); // Immediate call
    expect(func).toHaveBeenCalledTimes(1);

    throttled(); // Should be queued
    throttled(); // Should be queued (and previous queue cleared)

    // Fast-forward time
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the original function', () => {
    const throttled = throttle(func, 100);
    throttled(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});
