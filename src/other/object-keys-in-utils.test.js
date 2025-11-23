import { keysIn } from './object-keys-in-utils';

describe('keysIn', () => {
  it('should return an array of own and inherited enumerable property names', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    const object = new Foo();
    expect(keysIn(object)).toEqual(['a', 'b']);
  });

  it('should handle empty objects', () => {
    expect(keysIn({})).toEqual([]);
  });

  it('should handle null or undefined objects', () => {
    expect(keysIn(null)).toEqual([]);
    expect(keysIn(undefined)).toEqual([]);
  });

  it('should include properties from the prototype chain', () => {
    const proto = { c: 3 };
    const object = Object.create(proto);
    object.a = 1;
    object.b = 2;
    const expectedKeys = ['a', 'b', 'c'];
    const actualKeys = keysIn(object);
    // Order of keys from prototype chain might vary, so check for inclusion
    expectedKeys.forEach(key => expect(actualKeys).toContain(key));
    expect(actualKeys.length).toBe(expectedKeys.length);
  });
});
