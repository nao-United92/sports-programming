import last from './array-last-simple';

describe('last', () => {
  it('should return the last element of an array', () => {
    const arr = [1, 2, 3];
    expect(last(arr)).toBe(3);
  });

  it('should return undefined for an empty array', () => {
    const arr = [];
    expect(last(arr)).toBeUndefined();
  });

  it('should return the element for an array with one element', () => {
    const arr = ['a'];
    expect(last(arr)).toBe('a');
  });

  it('should work with different types of elements', () => {
    const arr = [null, { a: 1 }, 'hello'];
    expect(last(arr)).toBe('hello');
  });

  it('should return undefined for null or undefined input', () => {
    expect(last(null)).toBeUndefined();
    expect(last(undefined)).toBeUndefined();
  });
});
