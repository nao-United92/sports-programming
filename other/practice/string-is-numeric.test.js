import stringIsNumeric from './string-is-numeric';

describe('stringIsNumeric', () => {
  test('should return true for a string with only digits', () => {
    expect(stringIsNumeric('12345')).toBe(true);
  });

  test('should return true for a string with a positive sign and digits', () => {
    expect(stringIsNumeric('+123')).toBe(true);
  });

  test('should return true for a string with a negative sign and digits', () => {
    expect(stringIsNumeric('-123')).toBe(true);
  });

  test('should return true for a string with decimal numbers', () => {
    expect(stringIsNumeric('123.45')).toBe(true);
  });

  test('should return true for a string starting with a decimal point', () => {
    expect(stringIsNumeric('.45')).toBe(true);
  });

  test('should return true for a string with a negative decimal number', () => {
    expect(stringIsNumeric('-12.3')).toBe(true);
  });

  test('should return false for an empty string', () => {
    expect(stringIsNumeric('')).toBe(false);
  });

  test('should return false for a string with spaces', () => {
    expect(stringIsNumeric('123 456')).toBe(false);
  });

  test('should return false for a string with alphabetic characters', () => {
    expect(stringIsNumeric('abc123')).toBe(false);
  });

  test('should return false for a string with special characters', () => {
    expect(stringIsNumeric('123!')).toBe(false);
  });

  test('should return false for a string with multiple decimal points', () => {
    expect(stringIsNumeric('1.2.3')).toBe(false);
  });

  test('should return false for just a sign', () => {
    expect(stringIsNumeric('+')).toBe(false);
    expect(stringIsNumeric('-')).toBe(false);
  });
});
