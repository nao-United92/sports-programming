import { pick } from './object-pick-utils';

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  it('should handle a single property path as a string', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, 'a')).toEqual({ 'a': 1 });
  });

  it('should ignore properties that do not exist', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, ['a', 'd'])).toEqual({ 'a': 1 });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, 'a')).toEqual({});
  });

  it('should return an empty object if no paths are provided', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, [])).toEqual({});
  });

  it('should not pick inherited properties', () => {
    function MyObject() {
      this.a = 1;
    }
    MyObject.prototype.b = 2;
    const object = new MyObject();
    expect(pick(object, ['a', 'b'])).toEqual({ 'a': 1 });
  });
});