import { merge } from './object-merge-utils.js';

describe('merge', () => {
  it('should merge properties of two objects', () => {
    const object = { 'a': 1 };
    const source = { 'b': 2 };
    merge(object, source);
    expect(object).toEqual({ 'a': 1, 'b': 2 });
  });

  it('should recursively merge nested objects', () => {
    const object = { 'a': { 'b': { 'c': 1 } } };
    const source = { 'a': { 'b': { 'd': 2 }, 'e': 3 } };
    merge(object, source);
    expect(object).toEqual({ 'a': { 'b': { 'c': 1, 'd': 2 }, 'e': 3 } });
  });

  it('should overwrite existing properties', () => {
    const object = { 'a': 1, 'b': 2 };
    const source = { 'b': 3, 'c': 4 };
    merge(object, source);
    expect(object).toEqual({ 'a': 1, 'b': 3, 'c': 4 });
  });

  it('should handle multiple source objects', () => {
    const object = { 'a': 1 };
    const source1 = { 'b': 2 };
    const source2 = { 'c': 3 };
    merge(object, source1, source2);
    expect(object).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
  });

  it('should handle arrays by overwriting', () => {
    const object = { 'a': [1, 2] };
    const source = { 'a': [3, 4] };
    merge(object, source);
    expect(object).toEqual({ 'a': [3, 4] });
  });
});
