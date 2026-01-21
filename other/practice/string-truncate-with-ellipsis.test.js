import truncateWithEllipsis from './string-truncate-with-ellipsis.js';

describe('truncateWithEllipsis', () => {
  it('should truncate the string and add an ellipsis', () => {
    const str = 'This is a long string';
    expect(truncateWithEllipsis(str, 10)).toBe('This is a ...');
  });

  it('should not truncate the string if it is shorter than the max length', () => {
    const str = 'Short';
    expect(truncateWithEllipsis(str, 10)).toBe('Short');
  });

  it('should handle an empty string', () => {
    expect(truncateWithEllipsis('', 10)).toBe('');
  });

  it('should handle a maxLength of 0', () => {
    const str = 'This is a long string';
    expect(truncateWithEllipsis(str, 0)).toBe('...');
  });
});
