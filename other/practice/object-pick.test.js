import { pick } from './object-pick.js';
describe('pick', () => {
  it('should pick specified keys', () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });
});
