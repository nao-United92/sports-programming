const hasPath = require('./object-has-path-utils');

describe('hasPath', () => {
  const obj = { 'a': { 'b': { 'c': 1 } }, 'd': [1, 2] };

  it('should return true for a valid path string', () => {
    expect(hasPath(obj, 'a.b.c')).toBe(true);
  });

  it('should return true for a valid path array', () => {
    expect(hasPath(obj, ['a', 'b', 'c'])).toBe(true);
  });
  
  it('should return true for a valid path with array index', () => {
    expect(hasPath(obj, 'd[1]')).toBe(true);
  });

  it('should return false for an invalid path string', () => {
    expect(hasPath(obj, 'a.b.x')).toBe(false);
  });

  it('should return false if the path is longer than the object depth', () => {
    expect(hasPath(obj, 'a.b.c.d')).toBe(false);
  });
  
  it('should return false for an invalid index in array', () => {
    expect(hasPath(obj, 'd[2]')).toBe(false);
  });

  it('should return false for null or undefined objects', () => {
    expect(hasPath(null, 'a.b')).toBe(false);
    expect(hasPath(undefined, ['a', 'b'])).toBe(false);
  });

  it('should handle paths that include keys that are not own properties', () => {
    const proto = { 'z': 10 };
    const newObj = Object.create(proto);
    newObj.x = { y: 5 };
    expect(hasPath(newObj, 'x.y')).toBe(true);
    expect(hasPath(newObj, 'z')).toBe(false);
  });
});
