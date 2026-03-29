import { reverseSimple } from './string-reverse-simple.js';
describe('reverseSimple', () => {
  it('should reverse a string', () => {
    expect(reverseSimple('hello')).toBe('olleh');
  });
});
