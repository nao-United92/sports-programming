
import { calculateReadingTime } from './reading-time-utils.js';

describe('calculateReadingTime', () => {
  test('should return 0 for empty or invalid text', () => {
    expect(calculateReadingTime('')).toBe(0);
    expect(calculateReadingTime(null)).toBe(0);
    expect(calculateReadingTime(undefined)).toBe(0);
    expect(calculateReadingTime(123)).toBe(0);
  });

  test('should return 1 for a text with 200 words or less', () => {
    const text = 'word '.repeat(100);
    expect(calculateReadingTime(text)).toBe(1);
  });

  test('should return 2 for a text with 201 to 400 words', () => {
    const text = 'word '.repeat(300);
    expect(calculateReadingTime(text)).toBe(2);
  });

  test('should handle custom words per minute', () => {
    const text = 'word '.repeat(300);
    expect(calculateReadingTime(text, 100)).toBe(3);
  });

  test('should handle text with no words', () => {
    const text = ' ';
    expect(calculateReadingTime(text)).toBe(0);
  });
});
