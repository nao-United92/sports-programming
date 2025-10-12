const { delay, debounce, throttle } = require('./async-delay-utils.js');

describe('delay', () => {
  // Jestのタイマーモックを有効にする
  beforeEach(() => {
    jest.useFakeTimers();
  });

  // 各テストの後にタイマーモックを無効にする
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should delay for the specified amount of time', async () => {
    const mockFn = jest.fn();
    const delayTime = 1000;

    const promise = delay(delayTime).then(mockFn);

    // delayTimeが経過していないので、関数はまだ呼び出されていないはず
    expect(mockFn).not.toHaveBeenCalled();

    // delayTimeだけ時間を進める
    jest.advanceTimersByTime(delayTime);

    // Promiseが解決されるのを待つ
    await promise;

    // 関数が呼び出されたはず
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should resolve immediately if delay time is 0', async () => {
    const mockFn = jest.fn();
    const promise = delay(0).then(mockFn);

    // 0msなので、すぐに解決されるはず
    jest.advanceTimersByTime(0);
    await promise;

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should pass through any arguments if provided', async () => {
    const delayTime = 500;
    const testArg = 'hello';

    const promise = delay(delayTime, testArg);

    jest.advanceTimersByTime(delayTime);

    const result = await promise;

    expect(result).toBe(testArg);
  });
});

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should call the function only once after the wait time', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer if called again within the wait time', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();
    jest.advanceTimersByTime(500);
    debouncedFn();

    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should call the function immediately and then not again within the limit', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the limit has passed', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
