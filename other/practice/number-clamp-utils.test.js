const { clamp } = require('./number-clamp-utils');

describe('clamp', () => {
  it('should return the number itself if it is within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('should return the lower bound if the number is less than the lower bound', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('should return the upper bound if the number is greater than the upper bound', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('should handle negative bounds correctly', () => {
    expect(clamp(-15, -10, -5)).toBe(-10);
    expect(clamp(0, -10, -5)).toBe(-5);
  });

  it('should handle float numbers', () => {
    expect(clamp(5.5, 0.1, 10.9)).toBe(5.5);
    expect(clamp(-0.5, 0.1, 10.9)).toBe(0.1);
    expect(clamp(11.0, 0.1, 10.9)).toBe(10.9);
  });

  it('should handle equal bounds', () => {
    expect(clamp(5, 5, 5)).toBe(5);
    expect(clamp(0, 5, 5)).toBe(5);
    expect(clamp(10, 5, 5)).toBe(5);
  });
});