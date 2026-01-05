import lcm from './number-lcm-utils';

describe('lcm', () => {
  test('should return the correct LCM for positive integers', () => {
    expect(lcm(4, 6)).toBe(12);
    expect(lcm(21, 6)).toBe(42);
    expect(lcm(17, 13)).toBe(221); // Prime numbers
    expect(lcm(7, 7)).toBe(7);
  });

  test('should return the number itself if one is a multiple of the other', () => {
    expect(lcm(10, 5)).toBe(10);
    expect(lcm(25, 50)).toBe(50);
  });

  test('should handle zero correctly', () => {
    expect(lcm(0, 5)).toBe(0);
    expect(lcm(5, 0)).toBe(0);
    expect(lcm(0, 0)).toBe(0);
  });

  test('should throw an error for non-integer arguments', () => {
    expect(() => lcm(1.5, 2)).toThrow(TypeError);
    expect(() => lcm(1, '2')).toThrow(TypeError);
    expect(() => lcm(null, 2)).toThrow(TypeError);
  });

  test('should throw an error for negative integers', () => {
    expect(() => lcm(-4, 2)).toThrow(Error);
    expect(() => lcm(4, -2)).toThrow(Error);
    expect(() => lcm(-4, -2)).toThrow(Error);
  });
});
