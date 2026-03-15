import { toSafeInteger } from './math-to-safe-integer';

describe('toSafeInteger', () => {
  test('converts a float to a safe integer', () => {
    expect(toSafeInteger(3.2)).toBe(3);
  });

  test('converts a string to a safe integer', () => {
    expect(toSafeInteger('5.5')).toBe(5);
  });

  test('handles NaN values', () => {
    expect(toSafeInteger(NaN)).toBe(0);
  });

  test('caps values at MAX_SAFE_INTEGER', () => {
    expect(toSafeInteger(Infinity)).toBe(Number.MAX_SAFE_INTEGER);
  });
});
