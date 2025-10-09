import { invert } from './invert-object';

describe('invert', () => {
  it('should invert an object with unique values', () => {
    const object = { 'a': 1, 'b': 2 };
    const result = invert(object);
    expect(result).toEqual({ '1': 'a', '2': 'b' });
  });

  it('should handle objects with non-unique values (last one wins)', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const result = invert(object);
    expect(result).toEqual({ '1': 'c', '2': 'b' });
  });

  it('should return an empty object for null or undefined', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
  });

  it('should not affect the original object', () => {
    const object = { 'a': 1, 'b': 2 };
    invert(object);
    expect(object).toEqual({ 'a': 1, 'b': 2 });
  });
});
