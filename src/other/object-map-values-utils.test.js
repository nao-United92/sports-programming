import { mapValues } from './object-map-values-utils.js';

describe('mapValues', () => {
  test('should map values and create a new object', () => {
    const users = {
      fred: { user: 'fred', age: 40 },
      pebbles: { user: 'pebbles', age: 1 },
    };
    const result = mapValues(users, (user) => user.age);
    expect(result).toEqual({ fred: 40, pebbles: 1 });
  });

  test('iteratee should receive value, key, and the original object', () => {
    const obj = { a: 1, b: 2 };
    const iteratee = jest.fn();
    mapValues(obj, iteratee);

    expect(iteratee).toHaveBeenCalledWith(1, 'a', obj);
    expect(iteratee).toHaveBeenCalledWith(2, 'b', obj);
  });

  test('should not modify the original object', () => {
    const obj = { a: 1 };
    mapValues(obj, (val) => val + 1);
    expect(obj).toEqual({ a: 1 });
  });

  test('should return an empty object for an empty object input', () => {
    const result = mapValues({}, (val) => val * 2);
    expect(result).toEqual({});
  });

  test('should not include inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;

    const foo = new Foo();
    const result = mapValues(foo, (val) => val);
    expect(result).toEqual({ a: 1 });
  });
});
