const { get } = require('./object-get-property');

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: 'value',
      },
      d: ['item1', 'item2'],
    },
    e: null,
  };

  it('should get a value using a string path', () => {
    expect(get(obj, 'a.b.c')).toBe('value');
  });

  it('should get a value using an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe('value');
  });

  it('should get an item from an array using dot notation', () => {
    expect(get(obj, 'a.d.1')).toBe('item2');
  });

  it('should get an item from an array using bracket notation', () => {
    expect(get(obj, 'a.d[1]')).toBe('item2');
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(obj, 'a.x.y')).toBeUndefined();
  });

  it('should return the default value for a non-existent path', () => {
    expect(get(obj, 'a.x.y', 'default')).toBe('default');
  });

  it('should return the default value if the object is null or undefined', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, ['a', 'b'], 'default')).toBe('default');
  });

  it('should return a null value if it exists at the path', () => {
    expect(get(obj, 'e')).toBeNull();
  });

  it('should return undefined if an intermediate path is null', () => {
    expect(get(obj, 'e.f')).toBeUndefined();
  });

  it('should return the default value if an intermediate path is null', () => {
    expect(get(obj, 'e.f', 'default')).toBe('default');
  });
});
