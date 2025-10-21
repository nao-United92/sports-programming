import { pick } from './object-pick';

describe('pick', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  it('should pick a single property', () => {
    expect(pick(object, 'a')).toEqual({ 'a': 1 });
  });

  it('should pick multiple properties', () => {
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  it('should return an empty object if no properties are picked', () => {
    expect(pick(object, 'd')).toEqual({});
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, 'a')).toEqual({});
    expect(pick(undefined, 'a')).toEqual({});
  });

  it('should not pick inherited properties', () => {
    function MyObject() {
      this.a = 1;
    }
    MyObject.prototype.b = 2;
    const myObjectInstance = new MyObject();
    expect(pick(myObjectInstance, ['a', 'b'])).toEqual({ 'a': 1 });
  });
});
