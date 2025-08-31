import { defaultsDeep } from './object-defaults-deep-utils.js';

describe('defaultsDeep', () => {
  it('should recursively assign default properties', () => {
    const object = { 'a': { 'b': 2 } };
    const source = { 'a': { 'b': 1, 'c': 3 } };
    defaultsDeep(object, source);
    expect(object).toEqual({ 'a': { 'b': 2, 'c': 3 } });
  });

  it('should not overwrite existing properties', () => {
    const object = { 'a': { 'b': 2 } };
    const source = { 'a': { 'b': 1 } };
    defaultsDeep(object, source);
    expect(object).toEqual({ 'a': { 'b': 2 } });
  });

  it('should handle multiple source objects', () => {
    const object = { 'a': { 'b': 2 } };
    const source1 = { 'a': { 'c': 3 } };
    const source2 = { 'a': { 'd': 4 } };
    defaultsDeep(object, source1, source2);
    expect(object).toEqual({ 'a': { 'b': 2, 'c': 3, 'd': 4 } });
  });

  it('should not modify source objects', () => {
    const object = {};
    const source = { 'a': { 'b': 1 } };
    defaultsDeep(object, source);
    expect(source).toEqual({ 'a': { 'b': 1 } });
  });

  it('should handle null and undefined values', () => {
    const object = { 'a': null };
    const source = { 'a': { 'b': 1 } };
    defaultsDeep(object, source);
    expect(object).toEqual({ 'a': null });
  });
});
