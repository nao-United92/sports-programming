import { clone } from './object-clone-utils';

describe('clone', () => {
  it('should clone primitives', () => {
    expect(clone(123)).toBe(123);
    expect(clone('abc')).toBe('abc');
    expect(clone(true)).toBe(true);
    expect(clone(null)).toBe(null);
    expect(clone(undefined)).toBe(undefined);
    const sym = Symbol('a');
    expect(clone(sym)).toBe(sym);
  });

  it('should shallow clone arrays', () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = clone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[2]).toBe(arr[2]);
  });

  it('should shallow clone plain objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = clone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).toBe(obj.b);
  });

  it('should clone Date objects', () => {
    const date = new Date();
    const clonedDate = clone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });

  it('should clone RegExp objects', () => {
    const regex = /abc/g;
    const clonedRegex = clone(regex);
    expect(clonedRegex).toEqual(regex);
    expect(clonedRegex).not.toBe(regex);
  });

  it('should clone Map objects', () => {
    const map = new Map([['a', 1], ['b', { c: 2 }]]);
    const clonedMap = clone(map);
    expect(clonedMap).toEqual(map);
    expect(clonedMap).not.toBe(map);
    expect(clonedMap.get('b')).toBe(map.get('b'));
  });

  it('should clone Set objects', () => {
    const set = new Set([1, { a: 2 }]);
    const clonedSet = clone(set);
    expect(clonedSet).toEqual(set);
    expect(clonedSet).not.toBe(set);
  });

  it('should handle functions', () => {
    const func = () => {};
    expect(clone(func)).toBe(func);
  });

  it('should handle class instances (shallow copy)', () => {
    class MyClass {
      constructor(val) {
        this.val = val;
      }
    }
    const instance = new MyClass({ x: 1 });
    const clonedInstance = clone(instance);
    expect(clonedInstance).toEqual(instance);
    expect(clonedInstance).not.toBe(instance);
    expect(clonedInstance.val).toBe(instance.val);
  });
});
