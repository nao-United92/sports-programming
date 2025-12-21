const map = require('./object-map-utils');

describe('map', () => {
  test('should map over an object and return an array of results', () => {
    const obj = { a: 1, b: 2 };
    const square = (n) => n * n;
    expect(map(obj, square)).toEqual([1, 4]);
  });

  test('should provide value, key, and object to the iteratee', () => {
    const obj = { a: 1 };
    const iteratee = jest.fn();
    map(obj, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', obj);
  });

  test('should handle an empty object', () => {
    const obj = {};
    const iteratee = (x) => x;
    expect(map(obj, iteratee)).toEqual([]);
  });

  test('should return an empty array for null or non-object inputs', () => {
    const iteratee = (x) => x;
    expect(map(null, iteratee)).toEqual([]);
    expect(map(undefined, iteratee)).toEqual([]);
    expect(map(123, iteratee)).toEqual([]);
  });

  test('should not map inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    const obj = new Foo();
    const iteratee = (x) => x;
    expect(map(obj, iteratee)).toEqual([1]);
  });
});
