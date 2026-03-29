import { truncate } from './string-truncate.js';
describe('truncate', () => {
  it('should truncate string', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
    expect(truncate('hi', 5)).toBe('hi');
  });
});
