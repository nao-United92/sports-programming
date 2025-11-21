const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const withTimeout = (promise, ms) => {
  const timeout = new Promise((_, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(`Timed out in ${ms}ms.`));
    }, ms);
  });

  return Promise.race([
    promise,
    timeout
  ]);
};

module.exports = { sleep, withTimeout };
