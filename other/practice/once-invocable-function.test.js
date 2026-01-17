import { once } from './once-invocable-function.js';

describe('once', () => {
  let mockFunction;
  let onceFunction;

  beforeEach(() => {
    mockFunction = jest.fn((a, b) => a + b);
    onceFunction = once(mockFunction);
  });

  test('should call the original function only once', () => {
    onceFunction(1, 2);
    onceFunction(3, 4);
    onceFunction(5, 6);

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(1, 2);
  });

  test('should return the result of the first call for subsequent calls', () => {
    const result1 = onceFunction(1, 2);
    const result2 = onceFunction(3, 4);
    const result3 = onceFunction(5, 6);

    expect(result1).toBe(3);
    expect(result2).toBe(3);
    expect(result3).toBe(3);
  });

  test('should maintain the correct "this" context', () => {
    const obj = {
      value: 10,
      getValue: once(function() {
        return this.value;
      }),
    };

    const result1 = obj.getValue();
    obj.value = 20; // Change value
    const result2 = obj.getValue();

    expect(result1).toBe(10);
    expect(result2).toBe(10);
  });
});
