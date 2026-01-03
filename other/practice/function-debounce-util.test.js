const debounce = require('./function-debounce-util');

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  it('should not call the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  it('should call the function after the specified delay', () => {
    debouncedFunc();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function only once if called multiple times within the delay period', () => {
    for (let i = 0; i < 10; i++) {
      debouncedFunc();
    }
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer if called again within the delay period', () => {
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the debounced function', () => {
    debouncedFunc(1, 'test');
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});
