import setInPath from './object-set-in-path';

describe('setInPath', () => {
  const originalObject = Object.freeze({
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    },
    f: [{
      g: 4
    }, {
      h: 5
    }],
  });

  test('should set a top-level property and return a new object', () => {
    const newObj = setInPath(originalObject, ['a'], 10);
    expect(newObj).toEqual({ ...originalObject,
      a: 10
    });
    expect(newObj).not.toBe(originalObject);
    expect(originalObject.a).toBe(1); // Ensure original is not modified
  });

  test('should set a nested property and return a new object', () => {
    const newObj = setInPath(originalObject, ['b', 'c'], 20);
    expect(newObj).toEqual({
      a: 1,
      b: {
        c: 20,
        d: {
          e: 3
        }
      },
      f: [{
        g: 4
      }, {
        h: 5
      }],
    });
    expect(newObj).not.toBe(originalObject);
    expect(newObj.b).not.toBe(originalObject.b);
    expect(originalObject.b.c).toBe(2);
  });

  test('should create intermediate objects if they do not exist', () => {
    const newObj = setInPath(originalObject, ['x', 'y', 'z'], 100);
    expect(newObj).toEqual({
      ...originalObject,
      x: {
        y: {
          z: 100
        }
      }
    });
    expect(newObj.x.y).not.toBeUndefined();
  });

  test('should set a value in an array path (index)', () => {
    const newObj = setInPath(originalObject, ['f', 0, 'g'], 40);
    expect(newObj.f[0].g).toBe(40);
    expect(newObj.f[0]).not.toBe(originalObject.f[0]); // Ensure nested array elements are cloned
    expect(newObj.f).not.toBe(originalObject.f);
  });

  test('should create new array elements if index is out of bounds (but not skip indices)', () => {
    const newObj = setInPath(originalObject, ['f', 2, 'k'], 6);
    expect(newObj.f[2]).toEqual({
      k: 6
    });
    expect(newObj.f.length).toBe(3); // The array length should increase
  });

  test('should handle empty path by merging value into a new object', () => {
    const newObj = setInPath(originalObject, [], {
      newProp: 'value'
    });
    expect(newObj).toEqual({
      ...originalObject,
      newProp: 'value'
    });
    expect(newObj).not.toBe(originalObject);
  });

  test('should handle replacing an existing non-object path segment with an object', () => {
    const newObj = setInPath(originalObject, ['a', 'b'], 'newVal'); // 'a' is 1
    expect(newObj.a).toEqual({
      b: 'newVal'
    });
  });

  test('should return a new object even if no change is made (due to cloning)', () => {
    const newObj = setInPath(originalObject, ['a'], 1); // Setting 'a' to its current value
    expect(newObj).toEqual(originalObject);
    expect(newObj).not.toBe(originalObject);
  });

  test('should not mutate original object when setting existing values', () => {
    const newObj = setInPath(originalObject, ['b', 'c'], 20);
    expect(originalObject.b.c).toBe(2);
  });
});
