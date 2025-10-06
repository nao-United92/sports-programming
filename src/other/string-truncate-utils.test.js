const { truncate } = require('./string-truncate-utils');

describe('truncate', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';

  it('should truncate a string to a specified length', () => {
    expect(truncate(str, 20)).toBe('abcdefghijklmnopq...');
  });

  it('should not truncate if the string is shorter than the length', () => {
    expect(truncate(str, 30)).toBe(str);
  });

  it('should use the default length of 30', () => {
    const longStr = '123456789012345678901234567890abc';
    expect(truncate(longStr)).toBe('123456789012345678901234567...');
  });

  it('should allow a custom omission string', () => {
    expect(truncate(str, 20, '-->')).toBe('abcdefghijklmnopq-->');
  });

  it('should handle edge case where length is smaller than omission', () => {
    expect(truncate(str, 5, '......')).toBe('......');
  });
});
