import { debounce } from './debounce-utils';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  test('should execute function after wait time', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should execute function only once for multiple calls within wait time', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset wait time on subsequent calls', () => {
    debouncedFunc();
    jest.advanceTimersByTime(250);
    debouncedFunc();
    jest.advanceTimersByTime(250);

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(250);
    expect(func).toHaveBeenCalledTimes(1);
  });
});