/**
 * Creates a new Web Worker from a function.
 * This allows creating a worker without needing a separate JS file.
 * @param {Function} workerFunction The function to be executed in the worker.
 *   This function will receive 'message' events and can use 'postMessage' to send data back.
 * @returns {Worker} A new Worker instance.
 */
export const createWorker = (workerFunction) => {
  const workerCode = `self.onmessage = ${workerFunction.toString()};`;
  const blob = new Blob([workerCode], { type: 'application/javascript' });
  return new Worker(URL.createObjectURL(blob));
};

/**
 * Runs a task in a Web Worker and returns a Promise with the result.
 * This simplifies the request-response communication with a worker.
 * @param {Worker} worker The worker instance to use.
 * @param {*} data The data to send to the worker.
 * @returns {Promise<any>} A Promise that resolves with the data received from the worker or rejects on error.
 */
export const runWorker = (worker, data) => {
  return new Promise((resolve, reject) => {
    worker.onmessage = (event) => {
      resolve(event.data);
      worker.terminate();
    };
    worker.onerror = (error) => {
      reject(error);
      worker.terminate();
    };
    worker.postMessage(data);
  });
};