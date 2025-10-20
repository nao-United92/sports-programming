import { pick, omit } from './object-subset-utils';

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should ignore keys that do not exist', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  it('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });
});

describe('omit', () => {
  it('should create an object without omitted properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should not omit keys that do not exist', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, ['d'])).toEqual({ a: 1, b: '2' });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });

  it('should return the full object if no keys are provided', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  it('should not omit properties from the prototype chain', () => {
    function MyObject() {
      this.a = 1;
    }
    MyObject.prototype.b = 2;
    const instance = new MyObject();
    expect(omit(instance, ['a'])).toEqual({}); // Only own properties are considered
    expect(omit(instance, [])).toEqual({ a: 1 });
  });
});