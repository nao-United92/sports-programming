import { domReady } from './dom-ready-utils.js';

describe('domReady', () => {
  let callback;

  beforeEach(() => {
    callback = jest.fn();
  });

  test('should execute callback immediately if DOM is already loaded', () => {
    Object.defineProperty(document, 'readyState', { value: 'complete', writable: true });
    domReady(callback);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should add event listener if DOM is not yet loaded', () => {
    Object.defineProperty(document, 'readyState', { value: 'loading', writable: true });
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    domReady(callback);
    expect(addEventListenerSpy).toHaveBeenCalledWith('DOMContentLoaded', callback);
    addEventListenerSpy.mockRestore();
  });
});
