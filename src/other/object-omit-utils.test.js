import { omit } from './object-omit-utils.js';

describe('omit', () => {
  it('should create an object without omitted properties', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(omit(object, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should work with a single property', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(omit(object, 'a')).toEqual({ b: '2', c: 3 });
  });

  it('should return the original object if no properties are omitted', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(omit(object, ['d', 'e'])).toEqual({ a: 1, b: '2', c: 3 });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'b'])).toEqual({});
    expect(omit(undefined, ['a', 'b'])).toEqual({});
  });

  it('should return the original object if paths are empty', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(omit(object, [])).toEqual({ a: 1, b: '2', c: 3 });
  });
});
