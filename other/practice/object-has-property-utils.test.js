import hasProperty from './object-has-property-utils';

describe('hasProperty', () => {
  test('should return true if object has the property directly', () => {
    const obj = { a: 1, b: 2 };
    expect(hasProperty(obj, 'a')).toBe(true);
  });

  test('should return false if object does not have the property', () => {
    const obj = { a: 1, b: 2 };
    expect(hasProperty(obj, 'c')).toBe(false);
  });

  test('should return false for inherited properties', () => {
    function Parent() {}
    Parent.prototype.a = 1;
    const child = new Parent();
    expect(hasProperty(child, 'a')).toBe(false);
  });

  test('should return false for null or undefined objects', () => {
    expect(hasProperty(null, 'a')).toBe(false);
    expect(hasProperty(undefined, 'a')).toBe(false);
  });
});
