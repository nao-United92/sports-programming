import { functionDebounceSimple } from './function-debounce-simple';

jest.useFakeTimers();

test('functionDebounceSimple debounces function calls', () => {
  const func = jest.fn();
  const debouncedFunc = functionDebounceSimple(func, 1000);

  debouncedFunc();
  debouncedFunc();
  debouncedFunc();

  expect(func).not.toHaveBeenCalled();

  jest.runAllTimers();

  expect(func).toHaveBeenCalledTimes(1);
});
