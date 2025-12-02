import { debounce } from './debounce-utils';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  test('should not call the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  test('should call the function only once after the wait time has passed', () => {
    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with the last provided arguments', () => {
    debouncedFunc('first call');
    debouncedFunc('second call');
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledWith('second call');
  });

  test('should reset the timeout if called again within the wait time', () => {
    debouncedFunc();
    jest.advanceTimersByTime(400);
    debouncedFunc(); // Called again before 500ms
    jest.advanceTimersByTime(400);
    expect(func).not.toHaveBeenCalled(); // Still not called
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // Called now
  });

  test('should allow immediate invocation with flush', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    debouncedFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function if canceled', () => {
    debouncedFunc();
    debouncedFunc.cancel();
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled();
  });

  test('should maintain the `this` context of the call', () => {
    const context = {
      method: func,
    };
    const debouncedInContext = debounce(context.method, 500);
    debouncedInContext.call(context);
    jest.advanceTimersByTime(500);
    expect(func.mock.instances[0]).toBe(context);
  });
});
