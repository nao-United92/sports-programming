import every from './array-every-utils';

describe('every', () => {
  it('should return true if all elements pass the test', () => {
    expect(every([1, 2, 3, 4], x => x > 0)).toBe(true);
  });
  it('should return false if any element fails the test', () => {
    expect(every([1, 2, 3, 4], x => x > 3)).toBe(false);
  });
});
