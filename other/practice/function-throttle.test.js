const throttle = require('./function-throttle');

describe('function-throttle', () => {
  test('throttles a function', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);

    const now = Date.now();
    jest.spyOn(Date, 'now').mockReturnValue(now);
    throttled();
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);

    Date.now.mockReturnValue(now + 50);
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);

    Date.now.mockReturnValue(now + 101);
    throttled();
    expect(fn).toHaveBeenCalledTimes(2);

    Date.now.mockRestore();
  });
});
