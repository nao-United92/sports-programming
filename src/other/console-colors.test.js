const { red, green, yellow, blue, magenta, cyan, white, colorize } = require('./console-colors.js');

describe('Console Colors', () => {
  const text = 'Hello, World!';

  test('should wrap text with red color codes', () => {
    expect(red(text)).toBe(`\x1b[31m${text}\x1b[0m`);
  });

  test('should wrap text with green color codes', () => {
    expect(green(text)).toBe(`\x1b[32m${text}\x1b[0m`);
  });

  test('should wrap text with yellow color codes', () => {
    expect(yellow(text)).toBe(`\x1b[33m${text}\x1b[0m`);
  });

  test('should wrap text with blue color codes', () => {
    expect(blue(text)).toBe(`\x1b[34m${text}\x1b[0m`);
  });

  test('should wrap text with magenta color codes', () => {
    expect(magenta(text)).toBe(`\x1b[35m${text}\x1b[0m`);
  });

  test('should wrap text with cyan color codes', () => {
    expect(cyan(text)).toBe(`\x1b[36m${text}\x1b[0m`);
  });

  test('should wrap text with white color codes', () => {
    expect(white(text)).toBe(`\x1b[37m${text}\x1b[0m`);
  });

  describe('colorize function', () => {
    test('should return original text for invalid color', () => {
      expect(colorize('purple', text)).toBe(text);
    });

    test('should return original text for non-string input', () => {
      expect(colorize('red', 123)).toBe(123);
      expect(colorize('red', null)).toBe(null);
      expect(colorize('red', undefined)).toBe(undefined);
    });
  });
});
