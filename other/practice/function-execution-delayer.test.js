const { debounce } = require('./function-execution-delayer');

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  it('should call the function only once after the wait time', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function if the timer is not passed', () => {
    debouncedFunc();

    // Fast-forward time by 300ms
    jest.advanceTimersByTime(300);

    expect(func).not.toHaveBeenCalled();
  });

  it('should apply arguments to the debounced function', () => {
    debouncedFunc(1, 'test');

    jest.runAllTimers();

    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should reset the timer if called again within the wait time', () => {
    debouncedFunc();
    jest.advanceTimersByTime(300);
    debouncedFunc();
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });
});
