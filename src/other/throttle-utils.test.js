import { throttle } from './throttle-utils.js';

// Mock setTimeout and clearTimeout to control time in tests
vi.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = vi.fn();
  });

  test('should call the function immediately', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    const throttled = throttle(func, 100);
    throttled();
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait time', () => {
    const throttled = throttle(func, 100);
    throttled(); // Called at 0ms
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time by 50ms
    vi.advanceTimersByTime(50);
    throttled(); // Should be ignored
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time by another 50ms (total 100ms)
    vi.advanceTimersByTime(50);
    throttled(); // Should be called now
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should use the latest arguments for the trailing call', () => {
    const throttled = throttle(func, 100);
    throttled(1);
    expect(func).toHaveBeenCalledWith(1);

    throttled(2);
    throttled(3);

    // Fast-forward time to trigger the trailing call
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(3);
  });

  test('should return the result of the last actual invocation', () => {
    const funcWithReturn = (val) => val * 2;
    const throttled = throttle(funcWithReturn, 100);

    const result1 = throttled(1); // Invoked
    expect(result1).toBe(2);

    const result2 = throttled(2); // Throttled
    expect(result2).toBe(2); // Returns previous result

    vi.advanceTimersByTime(100);
    const result3 = throttled(3); // Invoked
    expect(result3).toBe(6);
  });
});
