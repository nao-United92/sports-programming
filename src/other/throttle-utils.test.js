import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately on the first call', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait time', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(); // 1回目
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // 待機時間内なので呼ばれない
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // 合計100ms経過
    // タイマーが進んだことで、キューに入っていた関数が実行される
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should call the function with the latest arguments on the trailing edge', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(1);
    throttledFunc(2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(2);
  });

  test('cancel should prevent the trailing invocation', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(1);
    throttledFunc(2);
    throttledFunc.cancel();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('flush should trigger the trailing invocation immediately', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(1);
    throttledFunc(2);
    throttledFunc.flush();
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(2);
  });
});
