
import { pick } from './pick-utils.js';

describe('pick', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  test('should create an object with picked properties', () => {
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  test('should not include properties that are not in the source object', () => {
    expect(pick(object, ['a', 'd'])).toEqual({ 'a': 1 });
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'c'])).toEqual({});
    expect(pick(undefined, ['a', 'c'])).toEqual({});
  });

  test('should return an empty object if no keys are provided', () => {
    expect(pick(object, [])).toEqual({});
  });

  test('should not pick inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    const foo = new Foo();
    expect(pick(foo, ['a', 'b'])).toEqual({ 'a': 1 });
  });
});
