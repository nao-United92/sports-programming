
const functionDebounceSimple = require('./function-debounce-simple');

describe('functionDebounceSimple', () => {
  jest.useFakeTimers();

  test('delays function execution', () => {
    const func = jest.fn();
    const debounced = functionDebounceSimple(func, 100);
    
    debounced();
    expect(func).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalled();
  });

  test('resets timer on subsequent calls', () => {
    const func = jest.fn();
    const debounced = functionDebounceSimple(func, 100);
    
    debounced();
    jest.advanceTimersByTime(50);
    debounced(); // reset
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
