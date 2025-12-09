const { debounce } = require('./function-debounce-utils');

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 100);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should not execute the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  test('should execute the function only once after the wait time', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should execute with the last arguments', () => {
    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(3);
  });

  test('should reset the timer on subsequent calls', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    debouncedFunc(); // Reset timer
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(99);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(1);
  });

  describe('flush method', () => {
    test('should execute the function immediately', () => {
      debouncedFunc(42);
      expect(func).not.toHaveBeenCalled();

      debouncedFunc.flush();
      expect(func).toHaveBeenCalledTimes(1);
      expect(func).toHaveBeenCalledWith(42);
    });

    test('should not call the function again after flush', () => {
      debouncedFunc();
      debouncedFunc.flush();
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  describe('cancel method', () => {
    test('should prevent the function from executing', () => {
      debouncedFunc();
      debouncedFunc.cancel();

      jest.advanceTimersByTime(100);
      expect(func).not.toHaveBeenCalled();
    });
  });
});