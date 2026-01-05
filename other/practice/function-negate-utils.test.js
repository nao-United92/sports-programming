import negate from './function-negate-utils';

describe('negate', () => {
  test('should return a function that negates the result of the original predicate', () => {
    const isEven = (n) => n % 2 === 0;
    const isOdd = negate(isEven);

    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
  });

  test('should pass arguments to the original predicate', () => {
    const isGreaterThanTen = (a, b) => (a + b) > 10;
    const isNotGreaterThanTen = negate(isGreaterThanTen);

    expect(isNotGreaterThanTen(5, 4)).toBe(true); // 9 is not > 10
    expect(isNotGreaterThanTen(5, 6)).toBe(false); // 11 is > 10
  });

  test('should throw an error if the argument is not a function', () => {
    expect(() => negate(null)).toThrow(TypeError);
    expect(() => negate(undefined)).toThrow(TypeError);
    expect(() => negate(123)).toThrow(TypeError);
    expect(() => negate('string')).toThrow(TypeError);
    expect(() => negate({})).toThrow(TypeError);
  });
});
