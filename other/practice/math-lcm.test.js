import { lcm } from './math-lcm.js';
describe('lcm', () => {
  it('should return the least common multiple', () => {
    expect(lcm(12, 18)).toBe(36);
  });
});
