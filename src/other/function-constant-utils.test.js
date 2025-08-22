import { constant } from './function-constant-utils';

describe('constant', () => {
  it('should return a function that always returns the same value', () => {
    const value = 'hello';
    const constFn = constant(value);
    expect(constFn()).toBe(value);
    expect(constFn()).toBe(value);
  });

  it('should work with different types of values', () => {
    const obj = { a: 1 };
    const constObjFn = constant(obj);
    expect(constObjFn()).toBe(obj);

    const arr = [1, 2];
    const constArrFn = constant(arr);
    expect(constArrFn()).toBe(arr);

    const num = 123;
    const constNumFn = constant(num);
    expect(constNumFn()).toBe(num);
  });
});
