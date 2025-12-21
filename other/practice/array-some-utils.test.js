import some from './array-some-utils';

describe('some', () => {
  it('should return true if some elements pass the test', () => {
    expect(some([1, 2, 3, 4], x => x > 3)).toBe(true);
  });
  it('should return false if no elements pass the test', () => {
    expect(some([1, 2, 3, 4], x => x > 4)).toBe(false);
  });
});
