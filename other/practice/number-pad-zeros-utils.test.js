const padZeros = require('./number-pad-zeros-utils');

describe('padZeros', () => {
  test('should pad a number with leading zeros to the specified width', () => {
    expect(padZeros(1, 3)).toBe('001');
    expect(padZeros(12, 3)).toBe('012');
    expect(padZeros(123, 3)).toBe('123');
    expect(padZeros(1234, 3)).toBe('1234'); // Number is already wider than width
  });

  test('should handle zero number', () => {
    expect(padZeros(0, 3)).toBe('000');
    expect(padZeros(0, 1)).toBe('0');
  });

  test('should handle negative numbers', () => {
    expect(padZeros(-1, 3)).toBe('-01'); // Note: negative sign is part of the number, not padded
    expect(padZeros(-12, 3)).toBe('-12');
  });

  test('should handle floating point numbers', () => {
    expect(padZeros(1.23, 5)).toBe('001.23');
    expect(padZeros(-1.23, 5)).toBe('-01.23');
  });

  test('should return original string if width is less than or equal to number length', () => {
    expect(padZeros(123, 2)).toBe('123');
    expect(padZeros(123, 3)).toBe('123');
  });

  test('should throw an error for non-finite number input', () => {
    expect(() => padZeros(NaN, 3)).toThrow('Input number must be a finite number.');
    expect(() => padZeros(Infinity, 3)).toThrow('Input number must be a finite number.');
    expect(() => padZeros(-Infinity, 3)).toThrow('Input number must be a finite number.');
    expect(() => padZeros('abc', 3)).toThrow('Input number must be a finite number.');
    expect(() => padZeros(null, 3)).toThrow('Input number must be a finite number.');
  });

  test('should throw an error for non-integer or negative width', () => {
    expect(() => padZeros(1, -1)).toThrow('Width must be a non-negative integer.');
    expect(() => padZeros(1, 1.5)).toThrow('Width must be a non-negative integer.');
    expect(() => padZeros(1, 'abc')).toThrow('Width must be a non-negative integer.');
    expect(() => padZeros(1, null)).toThrow('Width must be a non-negative integer.');
  });
});
