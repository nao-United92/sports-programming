import { omit } from './object-omit-utils';

describe('omit', () => {
  it('should create an object with omitted properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
  });

  it('should handle a single property path as a string', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, 'b')).toEqual({ 'a': 1, 'c': 3 });
  });

  it('should not omit properties that do not exist', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(omit(object, ['c', 'd'])).toEqual({ 'a': 1, 'b': '2' });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'b'])).toEqual({});
    expect(omit(undefined, 'a')).toEqual({});
  });

  it('should return a shallow copy of the object if no paths are provided', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(omit(object, [])).toEqual({ 'a': 1, 'b': '2' });
  });

  it('should not omit inherited properties', () => {
    function MyObject() {
      this.a = 1;
      this.b = 2;
    }
    MyObject.prototype.c = 3;
    const object = new MyObject();
    expect(omit(object, ['b'])).toEqual({ 'a': 1 });
  });
});