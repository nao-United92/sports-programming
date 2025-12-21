const keysIn = require('./object-keys-in-utils');

describe('keysIn', () => {
  function Foo() {
    this.a = 1;
    this.b = 2;
  }
  Foo.prototype.c = 3;

  test('should include inherited properties', () => {
    expect(keysIn(new Foo())).toEqual(['a', 'b', 'c']);
  });

  test('should return an empty array for null or undefined', () => {
    expect(keysIn(null)).toEqual([]);
    expect(keysIn(undefined)).toEqual([]);
  });

  test('should work with plain objects', () => {
    const obj = { x: 10, y: 20 };
    expect(keysIn(obj)).toEqual(['x', 'y']);
  });

  test('should handle objects with no own properties', () => {
    function Bar() {}
    Bar.prototype.d = 4;
    expect(keysIn(new Bar())).toEqual(['d']);
  });

  test('should not include non-enumerable properties', () => {
    const obj = {};
    Object.defineProperty(obj, 'a', { value: 1, enumerable: true });
    Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
    expect(keysIn(obj)).toEqual(['a']);
  });
});
