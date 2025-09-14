import { omit } from './object-omit-utils';

describe('omit', () => {
  it('should create an object without the omitted properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should return the original object if no keys are provided', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, [])).toEqual(obj);
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'c'])).toEqual({});
    expect(omit(undefined, ['a', 'c'])).toEqual({});
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: '2', c: 3 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: '2', c: 3 });
  });

  it('should ignore keys that are not in the source object', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, ['c', 'd'])).toEqual({ a: 1, b: '2' });
  });
});