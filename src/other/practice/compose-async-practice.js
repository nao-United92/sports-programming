export const composeAsync = (...fns) => (x) => fns.reduceRight((promise, fn) => promise.then(fn), Promise.resolve(x));
