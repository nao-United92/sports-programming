export const pipeAsync = (...fns) => (x) => fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
