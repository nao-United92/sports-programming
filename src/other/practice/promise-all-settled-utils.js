
export const promiseAllSettled = (promises) => {
  if (!Array.isArray(promises)) {
    return Promise.reject(new TypeError('The input must be an array.'));
  }

  const settledPromises = promises.map(p =>
    Promise.resolve(p).then(
      value => ({ status: 'fulfilled', value }),
      reason => ({ status: 'rejected', reason })
    )
  );

  return Promise.all(settledPromises);
};
