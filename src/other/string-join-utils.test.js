import { join } from './string-join-utils';

describe('join', () => {
  it('should join array elements with a separator', () => {
    expect(join(['a', 'b', 'c'], '~')).toBe('a~b~c');
  });

  it('should use a default separator', () => {
    expect(join(['a', 'b', 'c'])).toBe('a,b,c');
  });

  it('should use a different separator for the last element', () => {
    expect(join(['a', 'b', 'c'], ', ', ' and ')).toBe('a, b and c');
  });

  it('should handle an array with two elements correctly with lastSeparator', () => {
    expect(join(['a', 'b'], ', ', ' and ')).toBe('a and b');
  });

  it('should handle an array with one element', () => {
    expect(join(['a'])).toBe('a');
  });

  it('should return an empty string for an empty array', () => {
    expect(join([])).toBe('');
  });
});
