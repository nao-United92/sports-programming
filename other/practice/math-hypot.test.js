import { hypot } from './math-hypot';

describe('hypot', () => {
  test('calculates the hypotenuse of 3 and 4', () => {
    expect(hypot(3, 4)).toBe(5);
  });

  test('calculates the hypotenuse of 5 and 12', () => {
    expect(hypot(5, 12)).toBe(13);
  });

  test('calculates the hypotenuse of multiple numbers', () => {
    expect(hypot(3, 4, 12)).toBe(13);
  });

  test('returns 0 for no arguments', () => {
    expect(hypot()).toBe(0);
  });
});
