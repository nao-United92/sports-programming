import { mathLCM } from './math-lcm-utils';

describe('mathLCM', () => {
  test('calculates LCM of two numbers', () => {
    expect(mathLCM(4, 6)).toBe(12);
  });

  test('calculates LCM with 0', () => {
    expect(mathLCM(4, 0)).toBe(0);
  });
});
