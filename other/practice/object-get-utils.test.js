const {
  get
} = require('./object-get-utils');

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: 1
      },
      d: [2, 3]
    }
  };

  test('should get a nested property using dot notation', () => {
    expect(get(obj, 'a.b.c')).toBe(1);
  });

  test('should get a nested property using bracket notation', () => {
    expect(get(obj, 'a.d[0]')).toBe(2);
  });

  test('should return a default value if the path does not exist', () => {
    expect(get(obj, 'a.b.e', 'default')).toBe('default');
  });

  test('should return undefined if the path does not exist and no default value is provided', () => {
    expect(get(obj, 'a.e.f')).toBe(undefined);
  });

  test('should handle null or undefined objects', () => {
    expect(get(null, 'a.b.c')).toBe(undefined);
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
  });
});