
export const makeCancellable = (promise) => {
  let hasCancelled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => (hasCancelled ? reject({ isCancelled: true }) : resolve(val)),
      error => (hasCancelled ? reject({ isCancelled: true }) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCancelled = true;
    },
  };
};
