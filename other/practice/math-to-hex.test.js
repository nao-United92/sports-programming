import { toHex } from './math-to-hex';

describe('toHex', () => {
  test('should convert decimal to hex', () => {
    expect(toHex(10)).toBe('a');
    expect(toHex(16)).toBe('10');
    expect(toHex(255)).toBe('ff');
  });
});
