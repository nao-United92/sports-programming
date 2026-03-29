import { averageOf } from './math-average-of.js';
describe('averageOf', () => {
  it('should return average', () => {
    expect(averageOf(1, 2, 3, 4)).toBe(2.5);
  });
});
