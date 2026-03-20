import { contains } from './string-contains-substring';

describe('contains', () => {
  test('returns true if string contains substring', () => {
    expect(contains('hello world', 'world')).toBe(true);
  });

  test('returns false if string does not contain substring', () => {
    expect(contains('hello world', 'foo')).toBe(false);
  });
});
