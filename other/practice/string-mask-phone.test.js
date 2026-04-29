import { maskPhone } from './string-mask-phone';

describe('maskPhone', () => {
  test('should mask phone numbers', () => {
    expect(maskPhone('1234567890')).toBe('******7890');
    expect(maskPhone('12345')).toBe('*2345');
  });

  test('should not mask if 4 digits or less', () => {
    expect(maskPhone('1234')).toBe('1234');
    expect(maskPhone('12')).toBe('12');
  });
});
