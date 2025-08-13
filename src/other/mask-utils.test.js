import { mask } from './mask-utils';

describe('mask', () => {
  test('should mask a string correctly', () => {
    expect(mask('1234567890', 4, '*')).toBe('******7890');
  });

  test('should use default mask character', () => {
    expect(mask('1234567890', 4)).toBe('******7890');
  });

  test('should not mask if visible count is greater than or equal to string length', () => {
    expect(mask('12345', 5)).toBe('12345');
    expect(mask('12345', 10)).toBe('12345');
  });

  test('should handle empty string', () => {
    expect(mask('', 4)).toBe('');
  });

  test('should handle null or undefined', () => {
    expect(mask(null, 4)).toBe('');
    expect(mask(undefined, 4)).toBe('');
  });

  test('should handle different mask character', () => {
    expect(mask('1234567890', 4, '#')).toBe('######7890');
  });

  test('should handle number input', () => {
    expect(mask(1234567890, 4, '*')).toBe('******7890');
  });
});
