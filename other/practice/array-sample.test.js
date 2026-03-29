import { sample } from './array-sample.js';
describe('sample', () => {
  it('should return an element from the array', () => {
    const arr = [1, 2, 3];
    expect(arr).toContain(sample(arr));
  });
});
