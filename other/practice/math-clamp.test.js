import { clamp } from './math-clamp.js';
describe('clamp', () => {
  it('should clamp numbers', () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(-5, 0, 5)).toBe(0);
    expect(clamp(3, 0, 5)).toBe(3);
  });
});
