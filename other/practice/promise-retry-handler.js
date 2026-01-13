const retry = (fn, retries = 3, delay = 100) =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((err) => {
        if (retries === 0) {
          reject(err);
          return;
        }
        setTimeout(() => {
          retry(fn, retries - 1, delay).then(resolve, reject);
        }, delay);
      });
  });

module.exports = { retry };
