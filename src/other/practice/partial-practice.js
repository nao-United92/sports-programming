export function partial(fn, ...presetArgs) {
  return function partiallyApplied(...remainingArgs) {
    return fn.apply(this, presetArgs.concat(remainingArgs));
  };
}
