import { debounce } from './function-debouncer.js';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  test('should execute the function after the wait time', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should only execute the last call if called multiple times', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset the timer if called again within the wait time', () => {
    debouncedFunc();
    jest.advanceTimersByTime(200);
    debouncedFunc();
    
    jest.advanceTimersByTime(400);
    expect(func).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the debounced function', () => {
    debouncedFunc(1, 'test');
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});