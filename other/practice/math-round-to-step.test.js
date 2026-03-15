import { roundToStep } from './math-round-to-step';

describe('roundToStep', () => {
  test('rounds 12.3 to the nearest 5', () => {
    expect(roundToStep(12.3, 5)).toBe(10);
  });

  test('rounds 12.6 to the nearest 5', () => {
    expect(roundToStep(12.6, 5)).toBe(15);
  });

  test('rounds 1.23 to the nearest 0.1', () => {
    expect(roundToStep(1.23, 0.1)).toBeCloseTo(1.2);
  });
});
