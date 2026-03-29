import { unique } from './array-unique.js';
describe('unique', () => {
  it('should return unique elements', () => {
    expect(unique([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  });
});
