export const promiseWithTimeout = (promise, ms) => {
  let timeoutId = null;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`Promise timed out after ${ms} ms`));
    }, ms);
  });

  return {
    promise: Promise.race([promise, timeoutPromise]),
    cancel: () => {
      clearTimeout(timeoutId);
    },
  };
};
