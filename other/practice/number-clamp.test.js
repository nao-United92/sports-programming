const { clamp } = require('./number-clamp');

describe('clamp', () => {
  test('should return the value if it is within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(0, 0, 10)).toBe(0); // At min boundary
    expect(clamp(10, 0, 10)).toBe(10); // At max boundary
  });

  test('should return min if value is less than min', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(-100, -50, 0)).toBe(-50);
  });

  test('should return max if value is greater than max', () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(100, 0, 50)).toBe(50);
  });

  test('should handle negative ranges', () => {
    expect(clamp(-3, -5, -1)).toBe(-3);
    expect(clamp(-10, -5, -1)).toBe(-5);
    expect(clamp(0, -5, -1)).toBe(-1);
  });

  test('should handle float values', () => {
    expect(clamp(5.5, 0.5, 10.5)).toBe(5.5);
    expect(clamp(0.1, 0.5, 10.5)).toBe(0.5);
    expect(clamp(11.0, 0.5, 10.5)).toBe(10.5);
  });

  test('should throw TypeError if any argument is not a number', () => {
    expect(() => clamp('5', 0, 10)).toThrow(TypeError);
    expect(() => clamp(5, '0', 10)).toThrow(TypeError);
    expect(() => clamp(5, 0, '10')).toThrow(TypeError);
    expect(() => clamp(null, 0, 10)).toThrow(TypeError);
    expect(() => clamp(5, undefined, 10)).toThrow(TypeError);
    expect(() => clamp(5, 0, null)).toThrow(TypeError);
  });

  test('should throw Error if min is greater than max', () => {
    expect(() => clamp(5, 10, 0)).toThrow(Error);
  });
});
