import { isBinary } from './string-is-binary';

describe('isBinary', () => {
  test('should return true for binary strings', () => {
    expect(isBinary('0')).toBe(true);
    expect(isBinary('1')).toBe(true);
    expect(isBinary('1010')).toBe(true);
    expect(isBinary('000111')).toBe(true);
  });

  test('should return false for non-binary strings', () => {
    expect(isBinary('2')).toBe(false);
    expect(isBinary('102')).toBe(false);
    expect(isBinary('abc')).toBe(false);
    expect(isBinary('')).toBe(false);
  });
});
