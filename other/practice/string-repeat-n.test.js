import { repeatString } from './string-repeat-n';

describe('repeatString', () => {
  test('repeats string n times', () => {
    expect(repeatString('a', 3)).toBe('aaa');
  });

  test('returns empty string if n is 0', () => {
    expect(repeatString('a', 0)).toBe('');
  });
});
