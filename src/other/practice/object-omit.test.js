import { omit } from './object-omit';

describe('omit', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  it('should omit a single property', () => {
    expect(omit(object, 'a')).toEqual({ 'b': '2', 'c': 3 });
  });

  it('should omit multiple properties', () => {
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
  });

  it('should return an equivalent object if no properties are omitted', () => {
    expect(omit(object, 'd')).toEqual(object);
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, 'a')).toEqual({});
    expect(omit(undefined, 'a')).toEqual({});
  });

  it('should not affect the original object', () => {
    omit(object, 'a');
    expect(object).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
  });
});
