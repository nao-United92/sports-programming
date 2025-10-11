import { mask } from './string-mask-utils.js';

describe('mask', () => {
  test('should mask a string from a given index', () => {
    expect(mask('1234567890', 4)).toBe('1234******');
  });

  test('should use a custom mask character', () => {
    expect(mask('1234567890', 4, '#')).toBe('1234######');
  });

  test('should return the original string if numVisible is greater than or equal to length', () => {
    expect(mask('12345', 5)).toBe('12345');
    expect(mask('12345', 10)).toBe('12345');
  });

  test('should handle empty string', () => {
    expect(mask('', 4)).toBe('');
  });

  test('should handle null and undefined', () => {
    expect(mask(null, 4)).toBe('');
    expect(mask(undefined, 4)).toBe('');
  });
});
