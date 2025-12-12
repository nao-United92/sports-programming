const { clamp } = require('./number-clamp-utils');

describe('clamp', () => {
  test('should return the number if it is within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('should return the lower bound if the number is less than the lower bound', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test('should return the upper bound if the number is greater than the upper bound', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('should work with negative numbers', () => {
    expect(clamp(-15, -10, 0)).toBe(-10);
  });

  test('should return the number if it is equal to the lower bound', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  test('should return the number if it is equal to the upper bound', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  test('should return undefined if number is undefined', () => {
    expect(clamp(undefined, 0, 10)).toBeUndefined();
  });
});