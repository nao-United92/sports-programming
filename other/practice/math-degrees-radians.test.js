import { degreesToRadians, radiansToDegrees } from './math-degrees-radians';

describe('degreesToRadians', () => {
  test('converts 180 degrees to PI', () => {
    expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
  });
});

describe('radiansToDegrees', () => {
  test('converts PI to 180 degrees', () => {
    expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
  });
});
