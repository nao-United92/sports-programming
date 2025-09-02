import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let dateNowSpy;

  beforeEach(() => {
    func = jest.fn();
    // Mock Date.now() to control time
    let now = 0;
    dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => now);
    // Helper to advance time for both timers and Date.now
    const advanceTime = (ms) => {
      now += ms;
      jest.advanceTimersByTime(ms);
    };
    global.advanceTime = advanceTime;
  });

  afterEach(() => {
    // Restore original Date.now()
    dateNowSpy.mockRestore();
    delete global.advanceTime;
  });

  test('should call the function immediately on the leading edge', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    const throttled = throttle(func, 100);
    throttled(); // Called at t=0
    global.advanceTime(50);
    throttled(); // Throttled at t=50
    global.advanceTime(20);
    throttled(); // Throttled at t=70
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again on the trailing edge after the wait time', () => {
    const throttled = throttle(func, 100);
    throttled(); // Called at t=0
    expect(func).toHaveBeenCalledTimes(1);

    global.advanceTime(50);
    throttled(); // Should schedule a trailing call

    // Fast-forward time to just after the throttle period
    global.advanceTime(50);
    expect(func).toHaveBeenCalledTimes(2); // Trailing call should have fired
  });
  
  test('should pass the latest arguments to the trailing call', () => {
    const throttled = throttle(func, 100);
    throttled(1); // Leading call
    expect(func).toHaveBeenCalledWith(1);

    global.advanceTime(20);
    throttled(2);
    global.advanceTime(30);
    throttled(3); // This one should be the trailing call

    global.advanceTime(50); // 20 + 30 + 50 = 100
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenLastCalledWith(3);
  });

  test('a single call is not called twice', () => {
    const throttled = throttle(func, 100);
    throttled(1);
    expect(func).toHaveBeenCalledTimes(1);
    global.advanceTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });
});