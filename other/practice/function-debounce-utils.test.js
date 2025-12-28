const { debounce } = require('./function-debounce-utils');

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  it('should execute the function only once after the wait time', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer if called again within the wait time', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    debouncedFunc(); // Called again before 1000ms
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the original function', () => {
    debouncedFunc(1, 'test');
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should execute again after the first debounced call has completed', () => {
    debouncedFunc();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2);
  });
});
