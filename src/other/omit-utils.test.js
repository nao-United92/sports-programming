
import { omit } from './omit-utils.js';

describe('omit', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  test('should create an object with omitted properties', () => {
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
  });

  test('should not change the object if keys to omit do not exist', () => {
    expect(omit(object, ['d', 'e'])).toEqual(object);
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'c'])).toEqual({});
    expect(omit(undefined, ['a', 'c'])).toEqual({});
  });

  test('should return a copy of the object if no keys are provided', () => {
    expect(omit(object, [])).toEqual(object);
  });

  test('should not omit inherited properties from the result', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    const foo = new Foo();
    expect(omit(foo, ['c'])).toEqual({ 'a': 1 });
  });

  test('should handle a mix of existing and non-existing keys to omit', () => {
    expect(omit(object, ['a', 'd'])).toEqual({ 'b': '2', 'c': 3 });
  });
});
