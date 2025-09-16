const { truncate } = require('./string-truncate-utils.js');

describe('truncate', () => {
  it('should truncate a string that is longer than the specified length', () => {
    const str = 'This is a long string';
    const truncatedStr = truncate(str, 10);
    expect(truncatedStr).toBe('This is...');
  });

  it('should not truncate a string that is shorter than or equal to the specified length', () => {
    const str = 'Short';
    const truncatedStr = truncate(str, 10);
    expect(truncatedStr).toBe('Short');
  });

  it('should use a custom omission string', () => {
    const str = 'This is a long string';
    const truncatedStr = truncate(str, 10, '--');
    expect(truncatedStr).toBe('This is --');
  });

  it('should handle an empty string', () => {
    const str = '';
    const truncatedStr = truncate(str, 10);
    expect(truncatedStr).toBe('');
  });

  it('should handle a length of 0', () => {
    const str = 'This is a long string';
    const truncatedStr = truncate(str, 0);
    expect(truncatedStr).toBe('...');
  });
});