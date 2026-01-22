const { pick } = require('./object-property-selector');

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should ignore keys that do not exist in the source object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  it('should handle an empty keys array', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object for invalid inputs', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick({ a: 1 }, null)).toEqual({});
    expect(pick('string', ['length'])).toEqual({});
  });

  it('should not pick properties from the prototype chain', () => {
    function MyObject() {
      this.a = 1;
    }
    MyObject.prototype.b = 2;
    const obj = new MyObject();
    expect(pick(obj, ['a', 'b'])).toEqual({ a: 1 });
  });
});
