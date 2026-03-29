import { capitalize } from './string-capitalize.js';
describe('capitalize', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
