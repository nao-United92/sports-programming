import { mapKeys } from './object-map-keys-utils';

describe('mapKeys', () => {
  it('should map keys of an object using an iteratee function', () => {
    const users = {
      'fred': { 'user': 'fred', 'age': 40 },
      'pebbles': { 'user': 'pebbles', 'age': 1 },
    };
    expect(mapKeys(users, (value, key) => key + 'Id')).toEqual({ 'fredId': { 'user': 'fred', 'age': 40 }, 'pebblesId': { 'user': 'pebbles', 'age': 1 } });
  });

  it('should pass value, key, and object to the iteratee', () => {
    const object = { 'a': 1, 'b': 2 };
    const iteratee = jest.fn((value, key, obj) => `${key}-${value}`);
    const result = mapKeys(object, iteratee);

    expect(iteratee).toHaveBeenCalledWith(1, 'a', object);
    expect(iteratee).toHaveBeenCalledWith(2, 'b', object);
    expect(result).toEqual({ 'a-1': 1, 'b-2': 2 });
  });

  it('should handle empty objects', () => {
    expect(mapKeys({}, x => x)).toEqual({});
  });

  it('should handle null or undefined objects', () => {
    expect(mapKeys(null, x => x)).toEqual({});
    expect(mapKeys(undefined, x => x)).toEqual({});
  });

  it('should not include inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    expect(mapKeys(new Foo(), (value, key) => key)).toEqual({ 'a': 1 });
  });
});