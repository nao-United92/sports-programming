import { hasKey } from './object-has-key';

describe('hasKey', () => {
  test('returns true if the key exists', () => {
    expect(hasKey({ a: 1 }, 'a')).toBe(true);
  });

  test('returns false if the key does not exist', () => {
    expect(hasKey({ a: 1 }, 'b')).toBe(false);
  });

  test('does not check inherited properties', () => {
    const obj = Object.create({ a: 1 });
    expect(hasKey(obj, 'a')).toBe(false);
  });
});
