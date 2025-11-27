const { getObjectByPath, setObjectByPath } = require('./object-path-accessor');

describe('Object Path Accessors', () => {
  let testObj;

  beforeEach(() => {
    testObj = {
      a: {
        b: {
          c: 'hello',
        },
        d: [10, 20, { e: 30 }],
      },
      f: null,
    };
  });

  describe('getObjectByPath', () => {
    test('should get a deeply nested property', () => {
      expect(getObjectByPath(testObj, 'a.b.c')).toBe('hello');
    });

    test('should get an array element', () => {
      expect(getObjectByPath(testObj, 'a.d.0')).toBe(10);
    });

    test('should get a property from an object in an array', () => {
      expect(getObjectByPath(testObj, 'a.d.2.e')).toBe(30);
    });

    test('should return undefined for a non-existent path', () => {
      expect(getObjectByPath(testObj, 'a.x.y')).toBeUndefined();
    });

    test('should return undefined for a path that goes through a non-object', () => {
      expect(getObjectByPath(testObj, 'a.b.c.d')).toBeUndefined();
    });

    test('should return undefined for a path through null', () => {
      expect(getObjectByPath(testObj, 'f.g')).toBeUndefined();
    });

    test('should return the object itself for an empty path', () => {
      expect(getObjectByPath(testObj, '')).toEqual(testObj);
    });

    test('should return undefined for null or undefined object', () => {
      expect(getObjectByPath(null, 'a.b')).toBeUndefined();
      expect(getObjectByPath(undefined, 'a.b')).toBeUndefined();
    });
  });

  describe('setObjectByPath', () => {
    test('should set a deeply nested property', () => {
      setObjectByPath(testObj, 'a.b.c', 'world');
      expect(testObj.a.b.c).toBe('world');
    });

    test('should create nested objects if they do not exist', () => {
      setObjectByPath(testObj, 'x.y.z', 123);
      expect(testObj.x.y.z).toBe(123);
    });

    test('should set an array element', () => {
      setObjectByPath(testObj, 'a.d.1', 25);
      expect(testObj.a.d[1]).toBe(25);
    });

    test('should create nested arrays and objects', () => {
      const newObj = {};
      setObjectByPath(newObj, 'a.0.b', 'created');
      expect(newObj.a[0].b).toBe('created');
    });

    test('should overwrite an existing property', () => {
      setObjectByPath(testObj, 'a.b', { newValue: true });
      expect(testObj.a.b).toEqual({ newValue: true });
    });

    test('should not modify the object for an empty path', () => {
      const originalObj = { ...testObj };
      setObjectByPath(testObj, '', 'should not be set');
      expect(testObj).toEqual(originalObj);
    });

    test('should handle setting a property on a null-valued key', () => {
        setObjectByPath(testObj, 'f.g', 'new value');
        expect(testObj.f.g).toBe('new value');
    });
  });
});
