export const retry = async (func, retries = 3, delay = 100) => {
  try {
    return await func();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    await new Promise(res => setTimeout(res, delay));
    return retry(func, retries - 1, delay);
  }
};
