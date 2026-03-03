const debounce = require('./function-debounce');

jest.useFakeTimers();

describe('function-debounce', () => {
  test('debounces a function', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);

    debounced();
    debounced();
    debounced();

    expect(fn).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('calls the function with the last arguments', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);

    debounced('first');
    debounced('last');

    jest.runAllTimers();

    expect(fn).toHaveBeenCalledWith('last');
  });
});
