import omitBy from './omit-by-utils.js';

describe('omitBy', () => {
  const object = { 'a': 1, 'b': '2', 'c': null, 'd': 4 };

  test('should omit properties by value predicate', () => {
    const result = omitBy(object, (value) => value == null); // Omit null values
    expect(result).toEqual({ 'a': 1, 'b': '2', 'd': 4 });
  });

  test('should omit properties by key predicate', () => {
    const result = omitBy(object, (value, key) => key === 'a'); // Omit key 'a'
    expect(result).toEqual({ 'b': '2', 'c': null, 'd': 4 });
  });

  test('should return an empty object if predicate always returns truthy', () => {
    const result = omitBy(object, () => true); // Omit everything
    expect(result).toEqual({});
  });

  test('should return the original object if predicate always returns falsy', () => {
    const result = omitBy(object, () => false); // Omit nothing
    expect(result).toEqual(object);
  });

  test('should handle null or undefined input', () => {
    expect(omitBy(null, () => true)).toEqual({});
    expect(omitBy(undefined, () => true)).toEqual({});
  });

  test('should not include inherited properties', () => {
    function MyObject() {
      this.a = 1;
    }
    MyObject.prototype.b = 2;
    const obj = new MyObject();
    const result = omitBy(obj, () => true); // Omit everything
    expect(result).toEqual({});
  });
});
