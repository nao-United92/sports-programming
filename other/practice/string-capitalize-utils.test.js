import { capitalize } from './string-capitalize-utils';

describe('capitalize', () => {
  test('should capitalize the first letter and lowercase the rest', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should handle already capitalized words', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('should handle all uppercase words', () => {
    expect(capitalize('JAVASCRIPT')).toBe('Javascript');
  });

  test('should handle mixed case words', () => {
    expect(capitalize('pRojEct')).toBe('Project');
  });

  test('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  test('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle strings with leading spaces (operates on original string)', () => {
    expect(capitalize('  hello')).toBe('  hello'); // Behaves as JS string methods
  });

  test('should handle strings with numbers and symbols', () => {
    expect(capitalize('123test')).toBe('123test');
    expect(capitalize('@foo')).toBe('@foo');
  });

  test('should throw a TypeError if argument is not a string', () => {
    expect(() => capitalize(123)).toThrow('Expected a string argument');
    expect(() => capitalize(null)).toThrow('Expected a string argument');
    expect(() => capitalize(undefined)).toThrow('Expected a string argument');
    expect(() => capitalize({})).toThrow('Expected a string argument');
    expect(() => capitalize([])).toThrow('Expected a string argument');
  });
});
