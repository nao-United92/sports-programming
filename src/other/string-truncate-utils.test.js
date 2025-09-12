import { truncate } from './string-truncate-utils';

describe('truncate', () => {
  it('should truncate a string with default omission and length', () => {
    expect(truncate('long string that needs to be truncated')).toBe('long string that needs to b...'); // Corrected expected output
  });

  it('should not truncate if string is shorter than length', () => {
    expect(truncate('short string', { length: 30 })).toBe('short string');
  });

  it('should use custom length', () => {
    expect(truncate('long string that needs to be truncated', { length: 10 })).toBe('long st...');
  });

  it('should use custom omission', () => {
    expect(truncate('long string that needs to be truncated', { omission: '---' })).toBe('long string that needs to b---'); // Corrected expected output
  });

  it('should use custom length and omission', () => {
    expect(truncate('long string that needs to be truncated', { length: 10, omission: '...' })).toBe('long st...');
  });

  it('should handle length less than or equal to omission length', () => {
    expect(truncate('long string', { length: 2, omission: '...' })).toBe('..');
    expect(truncate('long string', { length: 3, omission: '...' })).toBe('...');
  });

  it('should return an empty string for null or undefined input', () => {
    expect(truncate(null)).toBe('');
    expect(truncate(undefined)).toBe('');
  });

  it('should handle empty string input', () => {
    expect(truncate('')).toBe('');
  });
});