
import { defaultsDeep } from './object-defaults-deep-utils.js';

describe('defaultsDeep', () => {
  test('should recursively fill in undefined properties', () => {
    const obj = { 'a': { 'b': 2 } };
    const source = { 'a': { 'b': 3, 'c': 4 }, 'd': 5 };
    const result = defaultsDeep(obj, source);
    expect(result).toEqual({ 'a': { 'b': 2, 'c': 4 }, 'd': 5 });
  });

  test('should not overwrite existing nested properties', () => {
    const obj = { 'a': { 'b': 2, 'c': { 'd': 6 } } };
    const source = { 'a': { 'b': 3, 'c': { 'd': 7, 'e': 8 } } };
    defaultsDeep(obj, source);
    expect(obj).toEqual({ 'a': { 'b': 2, 'c': { 'd': 6, 'e': 8 } } });
  });

  test('should handle multiple source objects', () => {
    const obj = { 'a': { 'b': undefined } };
    const source1 = { 'a': { 'b': 2, 'c': 3 } };
    const source2 = { 'a': { 'c': 4, 'd': 5 } };
    defaultsDeep(obj, source1, source2);
    expect(obj).toEqual({ 'a': { 'b': 2, 'c': 3, 'd': 5 } });
  });

  test('should modify the original object', () => {
    const obj = { 'a': { 'b': 2 } };
    defaultsDeep(obj, { 'a': { 'c': 3 } });
    expect(obj).toEqual({ 'a': { 'b': 2, 'c': 3 } });
  });
});
