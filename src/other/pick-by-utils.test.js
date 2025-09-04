import pickBy from './pick-by-utils.js';

describe('pickBy', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  test('should pick properties by value predicate', () => {
    const result = pickBy(object, (value) => typeof value === 'number');
    expect(result).toEqual({ 'a': 1, 'c': 3 });
  });

  test('should pick properties by key predicate', () => {
    const result = pickBy(object, (value, key) => key === 'a');
    expect(result).toEqual({ 'a': 1 });
  });

  test('should return an empty object if predicate never returns truthy', () => {
    const result = pickBy(object, () => false);
    expect(result).toEqual({});
  });

  test('should handle null or undefined input', () => {
    expect(pickBy(null, () => true)).toEqual({});
    expect(pickBy(undefined, () => true)).toEqual({});
  });

  test('should not include inherited properties', () => {
    function MyObject() {
      this.a = 1;
    }
    MyObject.prototype.b = 2;
    const obj = new MyObject();
    const result = pickBy(obj, () => true);
    expect(result).toEqual({ a: 1 });
  });
});
