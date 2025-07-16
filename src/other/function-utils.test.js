import { compose, pipe, curry, applyTransforms, debounce, throttle } from './function-utils.js';

describe('function-utils', () => {
  const add = (a, b) => a + b;
  const square = (n) => n * n;

  it('should compose functions', () => {
    const addAndSquare = compose(square, add);
    expect(addAndSquare(2, 3)).toBe(25);
  });

  it('should pipe functions', () => {
    const addThenSquare = pipe(add, square);
    expect(addThenSquare(2, 3)).toBe(25);
  });

  it('should curry a function', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(2)(3)).toBe(5);
  });

  it('should apply transforms to arguments', () => {
    const transform = (a, b) => a + b;
    const transformed = applyTransforms(transform, [square, square]);
    expect(transformed(2, 3)).toBe(13);
  });

  it('should debounce a function', (done) => {
    let callCount = 0;
    const debounced = debounce(() => {
      callCount++;
    }, 100);

    debounced();
    debounced();
    debounced();

    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 150);
  });

  it('should throttle a function', (done) => {
    let callCount = 0;
    const throttled = throttle(() => {
      callCount++;
    }, 100);

    throttled(); // First call should execute immediately
    throttled(); // Second call should be throttled
    throttled(); // Third call should be throttled

    setTimeout(() => {
      expect(callCount).toBe(1); // Only the first call should have executed
      throttled(); // This call should execute after the wait period
      setTimeout(() => {
        expect(callCount).toBe(2);
        done();
      }, 100);
    }, 50);
  });
});
