import { mapValues } from './object-map-values-utils';

describe('mapValues', () => {
  it('should map values of an object using an iteratee function', () => {
    const users = {
      'fred': { 'user': 'fred', 'age': 40 },
      'pebbles': { 'user': 'pebbles', 'age': 1 },
    };
    expect(mapValues(users, o => o.age)).toEqual({ 'fred': 40, 'pebbles': 1 });
  });

  it('should pass value, key, and object to the iteratee', () => {
    const object = { 'a': 1, 'b': 2 };
    const iteratee = jest.fn((value, key, obj) => `${key}-${value}`);
    const result = mapValues(object, iteratee);

    expect(iteratee).toHaveBeenCalledWith(1, 'a', object);
    expect(iteratee).toHaveBeenCalledWith(2, 'b', object);
    expect(result).toEqual({ 'a': 'a-1', 'b': 'b-2' });
  });

  it('should handle empty objects', () => {
    expect(mapValues({}, x => x)).toEqual({});
  });

  it('should handle null or undefined objects', () => {
    expect(mapValues(null, x => x)).toEqual({});
    expect(mapValues(undefined, x => x)).toEqual({});
  });

  it('should not include inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    expect(mapValues(new Foo(), x => x)).toEqual({ 'a': 1 });
  });
});