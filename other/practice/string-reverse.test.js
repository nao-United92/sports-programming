import stringReverse from './string-reverse';

describe('stringReverse', () => {
  test('should reverse a basic string', () => {
    expect(stringReverse('hello')).toBe('olleh');
  });

  test('should reverse a string with spaces', () => {
    expect(stringReverse('hello world')).toBe('dlrow olleh');
  });

  test('should return an empty string for an empty input', () => {
    expect(stringReverse('')).toBe('');
  });

  test('should return the same character for a single character string', () => {
    expect(stringReverse('a')).toBe('a');
  });

  test('should handle numbers in a string', () => {
    expect(stringReverse('12345')).toBe('54321');
  });

  test('should handle special characters', () => {
    expect(stringReverse('!@#$%')).toBe('%$#@!');
  });
});
