import { fill } from './array-fill-util';

describe('fill', () => {
  it('should create an array with n instances of value', () => {
    expect(fill(3, 'a')).toEqual(['a', 'a', 'a']);
  });

  it('should return an empty array if n is 0 or less', () => {
    expect(fill(0, 'a')).toEqual([]);
    expect(fill(-1, 'a')).toEqual([]);
  });

  it('should work with different value types', () => {
    expect(fill(2, 1)).toEqual([1, 1]);
    expect(fill(1, { key: 'value' })).toEqual([{ key: 'value' }]);
    expect(fill(4, null)).toEqual([null, null, null, null]);
  });
});
