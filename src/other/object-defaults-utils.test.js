import { defaults } from './object-defaults-utils';

describe('defaults', () => {
  it('should assign default properties to an object', () => {
    const object = { 'a': 1 };
    defaults(object, { 'b': 2, 'a': 3 });
    expect(object).toEqual({ 'a': 1, 'b': 2 });
  });

  it('should not overwrite existing properties', () => {
    const object = { 'a': 1, 'b': 2 };
    defaults(object, { 'a': 3, 'c': 4 });
    expect(object).toEqual({ 'a': 1, 'b': 2, 'c': 4 });
  });

  it('should assign properties that are undefined in the destination', () => {
    const object = { 'a': undefined, 'b': 2 };
    defaults(object, { 'a': 3, 'c': 4 });
    expect(object).toEqual({ 'a': 3, 'b': 2, 'c': 4 });
  });

  it('should handle multiple source objects', () => {
    const object = { 'a': 1 };
    defaults(object, { 'b': 2 }, { 'c': 3, 'a': 4 });
    expect(object).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
  });

  it('should iterate sources from left to right', () => {
    const object = {};
    defaults(object, { 'a': 1, 'b': 2 }, { 'b': 3, 'c': 4 });
    expect(object).toEqual({ 'a': 1, 'b': 2, 'c': 4 });
  });

  it('should handle null or undefined destination object', () => {
    expect(defaults(null, { a: 1 })).toEqual({ a: 1 });
    expect(defaults(undefined, { a: 1 })).toEqual({ a: 1 });
  });

  it('should handle null or undefined source objects', () => {
    const object = { a: 1 };
    defaults(object, null, { b: 2 }, undefined);
    expect(object).toEqual({ a: 1, b: 2 });
  });
});
