import { maskEmail } from './string-mask-email';

describe('maskEmail', () => {
  test('should mask email addresses', () => {
    expect(maskEmail('hello@example.com')).toBe('h****@example.com');
    expect(maskEmail('a@b.com')).toBe('a@b.com');
    expect(maskEmail('abc@def.com')).toBe('a**@def.com');
  });

  test('should return same string if not an email', () => {
    expect(maskEmail('notanemail')).toBe('notanemail');
  });
});
