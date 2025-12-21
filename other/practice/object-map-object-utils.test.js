const mapObject = require('./object-map-object-utils');

describe('mapObject', () => {
  test('should map over an object and return a new object', () => {
    const obj = { a: 1, b: 2 };
    const square = (n) => n * n;
    expect(mapObject(obj, square)).toEqual({ a: 1, b: 4 });
  });

  test('should provide value, key, and object to the iteratee', () => {
    const obj = { a: 1 };
    const iteratee = jest.fn();
    mapObject(obj, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', obj);
  });

  test('should handle an empty object', () => {
    const obj = {};
    const iteratee = (x) => x;
    expect(mapObject(obj, iteratee)).toEqual({});
  });

  test('should return an empty object for null or non-object inputs', () => {
    const iteratee = (x) => x;
    expect(mapObject(null, iteratee)).toEqual({});
    expect(mapObject(undefined, iteratee)).toEqual({});
    expect(mapObject(123, iteratee)).toEqual({});
  });

  test('should not map inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    const obj = new Foo();
    const iteratee = (x) => x;
    expect(mapObject(obj, iteratee)).toEqual({ a: 1 });
  });
});
