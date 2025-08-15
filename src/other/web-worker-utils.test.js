import { createWorker, runWorker } from './web-worker-utils.js';

// Mocking browser APIs for Jest (Node.js environment)
class MockWorker {
  constructor(stringUrl) {
    this.url = stringUrl;
    this.onmessage = () => {};
    this.onerror = () => {};
  }

  postMessage(msg) {
    // This is a generic mock. Specific tests might need to override this.
  }

  terminate() {
    // Mock terminate function.
  }
}

global.Worker = MockWorker;
global.URL.createObjectURL = jest.fn(blob => `blob:${blob.size}`);
global.Blob = jest.fn(parts => ({
    parts,
    size: parts[0].length,
    type: 'application/javascript'
}));

describe('Web Worker Utilities', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createWorker', () => {
    test('should create a worker from a function string', () => {
      const workerFunc = (e) => { self.postMessage(e.data * 2); };
      const worker = createWorker(workerFunc);

      expect(global.Blob).toHaveBeenCalledWith([`self.onmessage = ${workerFunc.toString()};`], { type: 'application/javascript' });
      expect(global.URL.createObjectURL).toHaveBeenCalled();
      expect(worker).toBeInstanceOf(MockWorker);
    });
  });

  describe('runWorker', () => {
    test('should send data to a worker and resolve with the result', async () => {
      const workerFunc = e => self.postMessage(e.data * 2);
      const worker = createWorker(workerFunc);

      // Simulate the worker's behavior for this specific test
      worker.postMessage = (data) => {
        worker.onmessage({ data: data * 2 });
      };

      const result = await runWorker(worker, 10);
      expect(result).toBe(20);
    });

    test('should reject the promise if the worker throws an error', async () => {
      const workerFunc = () => { throw new Error('Worker Error'); };
      const worker = createWorker(workerFunc);
      const error = new Error('Simulated worker error');

      // Simulate the worker's error behavior
      worker.postMessage = () => {
        worker.onerror(error);
      };

      await expect(runWorker(worker, {})).rejects.toBe(error);
    });

    test('should terminate the worker after resolving', async () => {
      const worker = createWorker(e => self.postMessage(e.data));
      const terminateSpy = jest.spyOn(worker, 'terminate');
      worker.postMessage = (data) => worker.onmessage({ data });

      await runWorker(worker, 'test');
      expect(terminateSpy).toHaveBeenCalledTimes(1);
    });

    test('should terminate the worker after rejecting', async () => {
      const worker = createWorker(() => {});
      const terminateSpy = jest.spyOn(worker, 'terminate');
      worker.postMessage = () => worker.onerror(new Error());

      await expect(runWorker(worker, 'test')).rejects.toThrow();
      expect(terminateSpy).toHaveBeenCalledTimes(1);
    });
  });
});