import { defaults } from './object-defaults-utils.js';

describe('defaults', () => {
  test('should fill in undefined properties', () => {
    const result = defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
    expect(result).toEqual({ 'a': 1, 'b': 2 });
  });

  test('should not overwrite existing properties', () => {
    const obj = { 'a': 1, 'b': null, 'c': false };
    const result = defaults(obj, { 'a': 10, 'b': 20, 'c': true, 'd': 40 });
    expect(result).toEqual({ 'a': 1, 'b': null, 'c': false, 'd': 40 });
  });

  test('should handle multiple source objects', () => {
    const result = defaults({ 'a': undefined }, { 'a': 1, 'b': 2 }, { 'b': 3, 'c': 4 });
    expect(result).toEqual({ 'a': 1, 'b': 2, 'c': 4 });
  });

  test('should modify the original object', () => {
    const obj = { 'a': 1 };
    defaults(obj, { 'b': 2 });
    expect(obj).toEqual({ 'a': 1, 'b': 2 });
  });

  test('should copy inherited properties from source', () => {
    function Foo() { this.a = 1; }
    Foo.prototype.b = 2;
    const result = defaults({ 'a': undefined }, new Foo());
    expect(result.b).toBe(2);
  });
});