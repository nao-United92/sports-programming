import { debounce } from './function-debounce.js';

jest.useFakeTimers();

describe('debounce', () => {
  test('should debounce a function', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1);
  });
  
  test('should pass arguments', () => {
      const func = jest.fn();
      const debouncedFunc = debounce(func, 100);
      
      debouncedFunc('hello');
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledWith('hello');
  });
});
