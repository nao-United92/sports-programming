const { debounce } = require('./function-debounce-utils');

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  it('should not call the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  it('should call the function after the specified delay', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function only once for multiple rapid calls', () => {
    for (let i = 0; i < 10; i++) {
      debouncedFunc();
    }
    
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer on subsequent calls', () => {
    debouncedFunc();
    jest.advanceTimersByTime(300);
    debouncedFunc();
    jest.advanceTimersByTime(400);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
