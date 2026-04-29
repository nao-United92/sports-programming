import { isHexV2 } from './string-is-hex-v2';

describe('isHexV2', () => {
  test('should return true for hex strings', () => {
    expect(isHexV2('abc')).toBe(true);
    expect(isHexV2('123')).toBe(true);
    expect(isHexV2('FFF')).toBe(true);
  });

  test('should return false for non-hex strings', () => {
    expect(isHexV2('ghij')).toBe(false);
    expect(isHexV2(' ')).toBe(false);
  });
});
