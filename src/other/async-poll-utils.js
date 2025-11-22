export const asyncPoll = async (
  fn,
  { interval = 1000, timeout = 10000, retries = Infinity } = {}
) => {
  let attempts = 0;
  const startTime = Date.now();

  const executePoll = async (resolve, reject) => {
    if (timeout !== Infinity && Date.now() - startTime > timeout) {
      return reject(new Error('Polling timed out'));
    }

    if (attempts >= retries) {
      return reject(new Error('Polling reached maximum retries'));
    }

    attempts++;

    try {
      const result = await fn();
      if (result) {
        return resolve(result);
      } else {
        setTimeout(() => executePoll(resolve, reject), interval);
      }
    } catch (error) {
      setTimeout(() => executePoll(resolve, reject), interval);
    }
  };

  return new Promise(executePoll);
};
