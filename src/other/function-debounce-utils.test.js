import { debounce } from './function-debounce-utils.js';

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should debounce a function call', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    jest.advanceTimersByTime(99);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function immediately with leading option', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function on the trailing edge by default', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments and context to the debounced function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1, 2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2);

    debouncedFunc.call({ a: 1 }, 3, 4);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(3, 4);
    expect(func).toHaveBeenCalledOnLastCallWith(3, 4);
  });

  it('should cancel delayed function calls', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc.cancel();
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();
  });

  it('should flush delayed function calls immediately', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(); // Called with no arguments as no new call was made after flush

    func.mockClear();
    debouncedFunc(1, 2);
    jest.advanceTimersByTime(50);
    debouncedFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  it('should not call on trailing edge if trailing is false and leading is true', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

    debouncedFunc(); // Leading call
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No trailing call
  });

  it('should not call on leading edge if leading is false and trailing is true (default)', () => {
    debouncedFunc = debounce(func, 100, { leading: false, trailing: true });

    debouncedFunc();
    expect(func).not.toHaveBeenCalled(); // No leading call

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // Trailing call
  });

  it('should handle multiple rapid calls correctly with trailing edge', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple rapid calls correctly with leading edge', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });
});