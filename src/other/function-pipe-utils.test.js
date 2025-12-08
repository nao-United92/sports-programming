const pipe = require('./function-pipe-utils');

describe('pipe', () => {
  const add5 = (x) => x + 5;
  const square = (x) => x * x;
  const double = (x) => x * 2;

  test('should pipe a series of functions from left to right', () => {
    const compute = pipe(add5, square, double);
    //
    // Call with 10:
    // 1. add5(10)     -> 15
    // 2. square(15)   -> 225
    // 3. double(225)  -> 450
    //
    expect(compute(10)).toBe(450);
  });

  test('should work with a single function', () => {
    const process = pipe(double);
    expect(process(100)).toBe(200);
  });

  test('should return the initial value if no functions are provided', () => {
    const identity = pipe();
    expect(identity(123)).toBe(123);
    const obj = { a: 1 };
    expect(identity(obj)).toBe(obj);
  });

  test('should handle different data types through the pipeline', () => {
    const process = pipe(
      (x) => x * 10,
      (x) => x.toString(),
      (x) => ({ value: x })
    );

    expect(process(5)).toEqual({ value: '50' });
  });

  test('the initial value can be of any type', () => {
    const getFirstChar = (s) => s.charAt(0);
    const processString = pipe(getFirstChar);
    expect(processString('hello')).toBe('h');

    const getPropA = (obj) => obj.a;
    const processObject = pipe(getPropA, double);
    expect(processObject({ a: 20 })).toBe(40);
  });
});
