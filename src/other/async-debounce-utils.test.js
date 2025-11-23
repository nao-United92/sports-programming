import { debounce } from './async-debounce-utils';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  it('should execute the function only once after the wait time', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the debounced function', () => {
    debouncedFunc(1, 'test');

    jest.runAllTimers();

    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should reset the timer if called again within the wait time', () => {
    debouncedFunc();
    jest.advanceTimersByTime(200);
    debouncedFunc();
    jest.advanceTimersByTime(300);

    // At this point, 500ms have passed since the first call, but only 300ms since the second.
    // The function should not have been called yet.
    expect(func).not.toHaveBeenCalled();

    // Fast-forward to trigger the timer from the second call.
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should apply the correct `this` context', () => {
    const myObj = {
      myMethod: func,
      debouncedMethod: debounce(function() { this.myMethod() }, 500),
    };
    myObj.debouncedMethod();
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
