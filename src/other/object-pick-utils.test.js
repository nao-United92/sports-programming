import { pick } from './object-pick-utils.js';

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should work with a single property', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(pick(object, 'a')).toEqual({ a: 1 });
  });

  it('should return an empty object if no properties are picked', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(pick(object, ['d', 'e'])).toEqual({});
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });

  it('should return an empty object if paths are empty', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(pick(object, [])).toEqual({});
  });
});