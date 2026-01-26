const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const timeout = (promise, ms) => {
  // Create a promise that rejects in <ms> milliseconds
  const timeoutPromise = new Promise((_, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(`Timed out after ${ms} ms`));
    }, ms);
  });

  // Returns a race between our timeout and the passed in promise
  return Promise.race([
    promise,
    timeoutPromise
  ]);
};

module.exports = { delay, timeout };
